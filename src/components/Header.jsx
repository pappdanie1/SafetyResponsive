import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../css/Header.css'
import logo from '/src/assets/logo.png'

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <header>
            <Link to='/'>
                <img className="header-logo" src={logo} alt="" />
            </Link>
            <nav ref={navRef}>
                <Link to="/">Kezdőlap</Link>
                <Link to="/munkavedelem">Munkavédelem</Link>
                <Link to="/tuzvedelem">Tűzvédelem</Link>
                <Link to="/kornyezetvedelem">Környezetvédelem</Link>
                <Link to="/energiahatekonysag">Energiahatékonyság</Link>
                <Link to="/referenciak">Referenciák</Link>
                <Link to="/kapcsolat">Kapcsolat</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Header