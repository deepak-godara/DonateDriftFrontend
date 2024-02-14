import React from 'react';
import logo from './logo.svg';
import './App.css';
import FundRaisalForm from './component/FundRaisalForm';
import Navbar from './component/NavBar/navbar';
import HomePage from './component/HomePage';
import DonateForm from './component/DonateMoneyForm/DonateForm';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router> 
      <>
        <Navbar/>
        {/* <FundRaisalForm/> */}
        {/* <HomePage/> */}
        <DonateForm/>
      </>
    </Router>
  );
}


export default App;
