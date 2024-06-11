import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../css/Header.css'


const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <header>
            <Link to='/'>
                <img className="header-logo" src="/src/assets/icon.svg" alt="" />
            </Link>
            <nav ref={navRef}>
                <a href="/munkavedelem">Munkavédelem</a>
                <a href="/tuzvedelem">Tűzvédelem</a>
                <a href="/kornyezetvedelem">Környezetvédelem</a>
                <a href="/kapcsolat">Kapcsolat</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar} >
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar} >
                <FaBars />
            </button>
        </header>
    )
}

export default Header