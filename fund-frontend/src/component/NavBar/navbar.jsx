import React, { useState } from 'react';
import { Items } from './Items';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

  return (
    <nav className="NavbarItems">

        <div className="InternalNavbarItems">
        <h1 className="NavbarLogo">DonateDrift</h1>
            <ul className={'Nav-menu'}>
                {Items.map((item, index) => {
                return (
                    <li key={index}>
                    <Link className={item.cName} to={item.url}>
                        <i>{item.icon&&<item.icon/>}</i>
                        {item.title}
                    </Link>
                    </li>
                );
                })}

                <Link to="/signup">
                {typeof window.myVariable !== 'undefined' && window.myVariable === 1 ? (
                    <div>
                        drop Down
                    </div>
                ) : (
                    <button>Sign Up</button>
                )}
                </Link>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
