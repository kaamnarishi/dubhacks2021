import statistics
import time

from flask_restful import Api, Resource, reqparse

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support import expected_conditions as expect

class SalaryApiHandler(Resource):
  def get(self, company, state):
    COMPANY = company
    STATE = state
    EXPERIENCE = "New Grad"
    TIME_FRAME = "Past 2 years"

    # Install webdriver to webscrape
    s=Service(ChromeDriverManager().install())
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(service=s, options=chrome_options)

    # Access webpage
    driver.get(f'https://www.levels.fyi/company/{COMPANY}/salaries/Software-Engineer/')

    # Find input box and enter state
    driver.find_element(By.XPATH, "//input[@placeholder='Search Cities, Tag, etc...']").send_keys(STATE)

    # Click on the dropdown and wait for elements to load
    driver.find_element(By.ID, 'dropdown-toggle-button').click()
    WebDriverWait(driver, 20, 1)\
        .until(expect.visibility_of_element_located(
        (By.XPATH, f"//div/label[contains(text(), '{EXPERIENCE}')]")))
    WebDriverWait(driver, 20, 1)\
        .until(expect.visibility_of_element_located(
        (By.XPATH, f"//div/label[contains(text(), '{TIME_FRAME}')]")))

    # Click on time frame and experience level
    driver.find_element(By.XPATH, f"//div/label[contains(text(), '{EXPERIENCE}')]").click()
    driver.find_element(By.XPATH, f"//div/label[contains(text(), '{TIME_FRAME}')]").click()

    total_salaries = []
    time.sleep(0.5)
    # Go through the table and append to total salaries
    trs = driver.find_elements(By.XPATH, "//table[@id='compTable']/tbody/tr")
    for tr in trs:
        t = tr.text.split('\n')
        location = t[1]
        experience = t[4]
        salary = t[5]
        if experience == '0 / 0' and location.split('|')[0].split(',')[1].strip() == STATE:
            print(location, experience)
            total_salaries.append(int(salary[1:].replace(',', '')))

    try:
        number_of_pages = int(driver.find_element(By.XPATH, "//ul[@class='pagination']/li[last()-1]").text)
    except:
        number_of_pages = 0

    for i in range(number_of_pages - 1):
        driver.find_element(By.XPATH, "//ul[@class='pagination']/li[last()]").click()
        time.sleep(0.5)
        trs = driver.find_elements(By.XPATH, "//table[@id='compTable']/tbody/tr")
        for tr in trs:
            t = tr.text.split('\n')
            location = t[1]
            experience = t[4]
            salary = t[5]
            if experience == '0 / 0' and location.split('|')[0].split(',')[1].strip() == STATE:
                print(location, experience)
                total_salaries.append(int(salary[1:].replace(',', '')))

    print(total_salaries)
    print(statistics.mean(total_salaries))
    return {
        'resultStatus': 'SUCCESS',
        'company': COMPANY,
        'state': STATE,
        'experience': EXPERIENCE,
        'timeframe': TIME_FRAME,
        'avgSalary': statistics.mean(total_salaries)
    }