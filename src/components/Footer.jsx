import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                Biztonság a Cége Sikere Érdekében!
            </div>
            <div className="footer-contact">
                <h3 className="footer-h3">Kapcsolat</h3>
                <div className="footer-contact-info">
                    <div className="footer-contact-item">
                        <MdEmail className="footer-icon" />
                        <a className="footer-contact" href="mailto:info@ehs-szolgaltatas.com">info@ehs-szolgaltatas.com</a>
                    </div>
                    <div className="footer-contact-item">
                        <IoPhonePortraitOutline className="footer-icon" />
                        <a className="footer-contact" href="tel:+36308647319">+36 30 8647319</a>
                    </div>
                    <div className="footer-contact-item">
                        <FaLinkedin className="footer-icon" />
                        <a className="footer-contact" href="https://www.linkedin.com/in/zsolt-papp-8270582b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-links">
                <h3 className="footer-h3">Linkek</h3>
                <ul>
                    <li><Link className="footer-contact" to="/">Kezdőlap</Link></li>
                    <li><Link className="footer-contact" to="/kapcsolat">Kapcsolat</Link></li>
                    <li><Link className="footer-contact" to="/munkavedelem">Munkavédelem</Link></li>
                    <li><Link className="footer-contact" to="/tuzvedelem">Tűzvédelem</Link></li>
                    <li><Link className="footer-contact" to="/kornyezetvedelem">Környezetvédelem</Link></li>
                    <li><Link className="footer-contact" to="/energiahatekonysag">Energiahatékonyság</Link></li>
                    <li><Link className="footer-contact" to="/referenciak">Referenciák</Link></li>
                    <li><Link className="footer-contact" to="/adatvedelmi-tajekoztato">Adatvédelmi Tájékoztató</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;