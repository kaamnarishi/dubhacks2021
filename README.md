# dubhacks2021


## Requirements and Dependencies 
You'll want to have npm and node. We're using npm 8.1.1 and node 17.0.1.
If you don't have any, get homebrew or a package manager of your choice and install.

Clone the repository and cd into it and then you'll want to install all required python packages
```
# Use python3
pip install -r  requirements.txt
```

Then you'll want to cd into frontend and run npm install to get the required dependencies
```
cd frontend
npm install

# May need to run the following commands
npm install axios
npm install react
npm install recharts
```


## Running the Server
At this point, stay in the frontend directory and build

```
# still in the /frontend directory
npm run build
```

Go to the root directory and run app.py
```
cd .. # If you're still in /frontend
python3 app.py
```

Then go to local host http://127.0.0.1:5000/ and you should see our app!

