import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import UserLayout from "./Layouts/UserLayout";
import GeneralLayout from "./Layouts/GeneralLayout";
import FundRaisalForm from "./component/FundRaisalForm";
import Navbar from "./component/NavBar/navbar";
import HomePage from "./component/HomePage";
import AdminAllFdunraiser from "./component/AdminAllFdunraiser";
import UserFundrasiers from "./component/UserFundrasiers";
import AuthUserProvider from "./Store/AuthClientProvider";
import UserContext from "./Store/AuthUser";
import EditFormInput from "./component/ProfileEditPage/editForm";
import NavBarComponent from "./component/NavBarComponent";
import DonateMainPage from "./component/DonateMainPage";
import DonateForm from "./component/DonateMoneyForm/DonateForm";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { Routes, Route } from "react-router-dom";
import Update from "./component/UpdateFundrasier/main";
import Authentication from "./component/Authentication";
import SignUp from "./component/Authentication/SignUp";
import Cookies from "js-cookie";
// import EditFormInput from "./component/ProfileEditPage/editForm";
import DiscoverPage from "./component/DiscoverPage/main";
function App() {
  const usercontext = useContext(UserContext);
  const [Token, SetToken] = useState<boolean>(false);
  const [Display, SetDisplay] = useState<boolean>(false);
  const Func = async (): Promise<boolean> => {
    const Cookie = Cookies.get("token");
    if (Cookie) SetToken(true);
    return true;
  };
  interface RedirectProps {
    to: string;
  }
  const Redirect: React.FC<RedirectProps> = ({ to }) => {
    const navigate = useNavigate();

    useEffect(() => {
      navigate(to, { replace: true });
    }, [navigate, to]);

    return null;
  };
  useState(() => {
    async function getLoginStatus() {
      await Func();
      console.log(usercontext.UserRole + " g");
      // console.log(T)
      SetDisplay(true);
    }

    getLoginStatus();
  });
  return (
    <Router>
      <Routes>
        <Route path="" element={Token ? <UserLayout /> : <GeneralLayout/>}>
       
          {Token && (
            <>
              {usercontext.UserRole === "ADMIN" && (
                <>
                  <Route index element={<AdminAllFdunraiser />}></Route>
                </>
              )}
              {usercontext.UserRole === "USER" && (
                <>
                  <Route index element={<HomePage />} />
                  <Route path="/fundraise" element={<FundRaisalForm />}></Route>

                  <Route
                    path="/fundraiser/update/:id"
                    element={<Update></Update>}
                  />
                  <Route path="profile" element={<EditFormInput />} />
                  <Route path="userfundraiser" element={<UserFundrasiers />} />
                </>
              )}
            </>
          )}
         {(!Token||Token)&& (
            <>
              <Route index element={<HomePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="fundraiser/:id" element={<DonateMainPage />} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
