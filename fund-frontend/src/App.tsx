import React from 'react';
import logo from './logo.svg';
import './App.css';
import FundRaisalForm from './component/FundRaisalForm';
import Navbar from './component/NavBar/navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router> 
      <>
        <Navbar/>
        <FundRaisalForm/>
      </>
    </Router>
  );
}


export default App;
