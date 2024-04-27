import React, { useState } from 'react';
import { PrimaryItems, SecondaryItems } from './Items';
import { Link } from 'react-router-dom';
import './navbar.css';
import phots4 from "../../assests/logo4.png"
import ModalPortal from '../../ModalPortal';
// import  Authentication
import Authentication from '../Authentication';
function Navbar() {
  
    const [OpenSignUp,SetSignUp]=useState(false);
  return (
    <nav className="NavbarItems">
        <div className="InternalNavbarItems">
        <img className="NavBarLogo" src={phots4}/>
        
            <div className="NavbarValues">
                <div className="NavbarValuesP1">
                    <ul className={'Nav-menu'}>
                        {PrimaryItems.map((item, index) => {
                        return (
                            <li key={index}>
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
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i style={{display:"flex", alignItems:"center"}}>{item.icon&&<item.icon/>}</i>
                                {item.title}
                            </Link>
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
