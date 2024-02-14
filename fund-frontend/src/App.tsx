import React from 'react';
import logo from './logo.svg';
import './App.css';
import FundRaisalForm from './component/FundRaisalForm';
import Navbar from './component/NavBar/navbar';
import HomePage from './component/HomePage';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router> 
      <>
        <Navbar/>
        <FundRaisalForm/>
        {/* <HomePage/> */}
      </>
    </Router>
  );
}


export default App;
