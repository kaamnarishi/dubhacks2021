import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/salary').then(response => {
      console.log("SUCCESS", response);
      setGetMessage(response);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi <code>Ardelle</code>
        </p>
        <div>{getMessage.status === 200 ?
          <h3>{getMessage.data.avgSalary}</h3>
          :
          <h3>LOADING</h3>}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
