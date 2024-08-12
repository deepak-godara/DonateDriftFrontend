import React, { useContext, useState } from 'react';
import User from '../../User';
import { PrimaryItems, SecondaryItems } from './Items';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './navbar.css';
// import Authentication from '../Authentication';
import phots4 from "../../assests/logo4.png"
import ModalPortal from '../../ModalPortal';
// import  Authentication
import Authentication from '../Authentication';
import UserContext from '../../Store/AuthUser';
function Navbar() {
  
    const [OpenSignUp,SetSignUp]=useState(false);
        const User=useContext(UserContext)
    const Navigate=useNavigate();
    console.log(User.isAuth)
    const StartFundRaiserFunc=()=>{
        console.log(User.isAuth)
         if(User.isAuth==null&&User.UserRole==="USER")
         {
            // Navigate("/fundraise");
         }
         else
         {
          SetSignUp(true);
         }
    }
  return (
    <nav className="NavbarItems">
        <div className="InternalNavbarItems">
        <img className="NavBarLogo" src={phots4}/>
        
            <div className="NavbarValues">
                <div className="NavbarValuesP1">
                    <ul className={'Nav-menu'}>
                        {PrimaryItems.map((item, index) => {
                        return (
                            <li key={index} >
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                            </li>
                        );
                        })}

                    </ul>
                </div>
                <div className='NavbarValuesP2'>
                    <ul className={'Nav-menu'}>
                        {SecondaryItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} onClick={StartFundRaiserFunc}>
                            {/* <Link className={item.cName} to={item.url}> */}
                                {item.title}
                            {/* </Link> */}
                            </li>
                        );
                        })}

                            <button  onClick={()=>{SetSignUp(true);
                             console.log("ij")}} style={{background:"none" ,padding:"0rem 1.5rem",fontSize:"17px"} }>Sign Up</button>
                    </ul>
                </div>
            </div>
        </div>
        {OpenSignUp&&<ModalPortal onClose={()=>{SetSignUp(false)}}><Authentication onClose={()=>{SetSignUp(false)}}/></ModalPortal>}
    </nav>
  );
}

export default Navbar;
