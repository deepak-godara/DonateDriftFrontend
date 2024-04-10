import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserLayout from "./Layouts/UserLayout";
import FundRaisalForm from "./component/FundRaisalForm";
import Navbar from "./component/NavBar/navbar";
import HomePage from "./component/HomePage";
import NavBarComponent from "./component/NavBarComponent";
import DonateMainPage from "./component/DonateMainPage";
import DonateForm from "./component/DonateMoneyForm/DonateForm";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { Routes, Route } from "react-router-dom";
import Authentication from "./component/Authentication";
import SignUp from "./component/Authentication/SignUp";
import Cookies from "js-cookie";
import EditFormInput from "./component/ProfileEditPage/editForm";
import DiscoverPage from "./component/DiscoverPage/main";
function App() {
  const [Token, SetToken] = useState<boolean>(false);
  const [Display, SetDisplay] = useState<boolean>(false);
  const Func = async (): Promise<boolean> => {
    const Cookie = Cookies.get("token");
    if (Cookie) SetToken(true);
    return true;
  };
  useState(() => {
    async function getLoginStatus() {
      await Func();
      SetDisplay(true);
    }

    getLoginStatus();
  });
  return (
    <Router>
    <Routes>
    
      {Token && (
        <>
          <Route path="" element={<UserLayout />}>
            <Route index element={<HomePage/>}/>
            <Route path="/Fundraise" element={<FundRaisalForm/>}/>
            <Route path="/discover" element={<DiscoverPage/>}/>
            <Route path="fundraiser/:id" element={<DonateMainPage/>}/>
          </Route>
       
        </>
      )}
      {!Token && (
        <>
        <Route path="" element={<Navbar />}></Route>
          
        </>
      )}
    </Routes>
    </Router>
  );
}

export default App;
