import logo from './logo.svg';
import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieCharts } from "./PieCharts";
import ReactDOM from "react-dom";
import {MasterHomeDashboard} from "./homepageComponents";
import {MasterPlanningCalculator} from "./dashboardComponents";

function App() {
  const [companyData, setCompanyData] = useState();
  if (companyData) {
    return (
      <div className="App">
        <MasterPlanningCalculator companyData={companyData} setCompanyData={setCompanyData}/>
      </div>
    );
  } else {
    return (
    <div className="App">
      <MasterHomeDashboard setCompanyData={setCompanyData}/>
      {/*  <PieCharts data={getMessage.data} />*/}
    </div>
  );
  }

}

export default App;


