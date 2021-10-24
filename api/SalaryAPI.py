import csv
import statistics
import time

import requests
from flask_restful import Resource

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
    total_base_salaries = []
    time.sleep(0.5)
    # Go through the table and append to total salaries
    trs = driver.find_elements(By.XPATH, "//table[@id='compTable']/tbody/tr")
    for tr in trs:
        t = tr.text.split('\n')
        location = t[1]
        experience = t[4]
        salary = t[5]
        base_salary = t[6].split('|')[0]
        if experience == '0 / 0' and location.split('|')[0].split(',')[1].strip() == STATE:
            print(location, experience)
            total_salaries.append(int(salary[1:].replace(',', '')))
            total_base_salaries.append(int(base_salary.replace(',', '').replace('k', '000')))

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
                total_salaries.append(int(salary[1:].replace(',', '')))

    print(statistics.mean(total_salaries))
    print(statistics.mean(total_base_salaries))
    avgAnnualSalary = round(statistics.mean(total_salaries))
    avgBaseSalary = round(statistics.mean(total_base_salaries))

    # GET TAX STATISTICS
    my_headers = {'Authorization': 'Bearer apiToken'}
    response = requests.post(
        'https://taxee.io/api/v2/calculate/2020',
        headers=my_headers,
        data={"pay_rate": avgAnnualSalary, "filing_status": "single", "state": "WA"},
    )

    annual_taxes = response.json()["annual"]
    annual_state_tax = annual_taxes["state"]["amount"] if annual_taxes["state"]["amount"] else 0
    annual_federal_tax = annual_taxes["federal"]["amount"]
    annual_fica_tax = annual_taxes["fica"]["amount"]
    annualAGI = avgAnnualSalary - annual_state_tax - annual_federal_tax - annual_fica_tax

    taxRate = annualAGI / avgAnnualSalary
    print("TAX", taxRate)
    annualBaseAGI = taxRate * avgBaseSalary
    print("Annual contributed by base salary", annualBaseAGI)
    monthlyBaseAGI = annualBaseAGI / 12

    # GET AVERAGE RENT PRICES
    state_to_rent = dict()
    with open("api/stateRent.csv") as stateRentFile:
        tsv_file = csv.reader(stateRentFile, delimiter="\t")
        for line in tsv_file:
            state_to_rent[line[0]] = (line[1], line[2], line[3])


    return {
        'resultStatus': 'SUCCESS',
        'company': COMPANY,
        'state': STATE,
        'experience': EXPERIENCE,
        'timeframe': TIME_FRAME,
        'avgSalary': statistics.mean(total_salaries),
        'annualStateTax': annual_state_tax,
        'annualFederalTax': annual_federal_tax,
        'annualFicaTax': annual_fica_tax,
        'annualAGI': annualAGI,
        'monthlyAGI': annualAGI / 12,
        'monthlyBaseAGI': monthlyBaseAGI,
        'avgStudioRent': state_to_rent[STATE][0],
        'avgOneBdrmRent': state_to_rent[STATE][1],
        'avgTwoBdrmRent': state_to_rent[STATE][2]
    }