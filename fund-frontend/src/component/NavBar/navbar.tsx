import React, { useState } from 'react';
import { PrimaryItems, SecondaryItems } from './Items';
import { Link } from 'react-router-dom';
import './navbar.css';
import ModalPortal from '../../ModalPortal';
// import  Authentication
import Authentication from '../Authentication';
function Navbar() {
  
    const [OpenSignUp,SetSignUp]=useState(false);
  return (
    <nav className="NavbarItems">

        <div className="InternalNavbarItems">
        <h1 className="NavbarLogo">DonateDrift</h1>
        
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
                                <i>{item.icon&&<item.icon/>}</i>
                                {item.title}
                            </Link>
                            </li>
                        );
                        })}

                            <button onClick={()=>{SetSignUp(true);
                             console.log("ij")}}>Sign Up</button>
                    </ul>
                </div>
            </div>
        </div>
        {OpenSignUp&&<ModalPortal onClose={()=>{SetSignUp(false)}}><Authentication onClose={()=>{SetSignUp(false)}}/></ModalPortal>}
    </nav>
  );
}

export default Navbar;
