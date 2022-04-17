import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../Assets/logo2.png';

import {
    Link,
} from "react-router-dom";

import "./Navbar.css"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="tsv__navbar">
            <div className="tsv__navbar-links">
                <div className="tsv__navbar-links_logo">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className="tsv__navbar-sign">
                <Link to="/">Home</Link>
            </div>
            <div className="tsv__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="tsv__navbar-menu_container scale-up-center">
                        <div className="tsv__navbar-menu_container-links-sign">
                            <p>Create Account</p>
                            <Link to="/"><button type="button">Log in</button></Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

