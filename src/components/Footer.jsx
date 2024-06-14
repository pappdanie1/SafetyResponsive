import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                Biztonság a Cége Sikere Érdekében!
            </div>
            <div className="footer-contact">
                <h3 className="footer-h3" >Kapcsolat</h3>
                <div className="footer-contact-info">
                    <div className="footer-contact-item">
                        <MdEmail className="footer-icon" />
                        <a className="footer-contact" href="mailto:pappzsolt6903@gmail.com">pappzsolt6903@gmail.com</a>
                    </div>
                    <div className="footer-contact-item">
                        <IoPhonePortraitOutline className="footer-icon" />
                        <a className="footer-contact" href="tel:+36308647319">+36 30 8647319</a>
                    </div>
                    <div className="footer-contact-item">
                        <FaLinkedin className="footer-icon" />
                        <a className="footer-contact" href="https://www.linkedin.com/in/zsolt-papp-8270582b4/">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-links">
                <h3 className="footer-h3" >Linkek</h3>
                <ul>
                    <li>
                        <a className="footer-contact" href="/">Kezdőlap</a>
                    </li>
                    <li>
                        <a className="footer-contact" href="/kapcsolat">Kapcsolat</a>
                    </li>
                    <li>
                        <a className="footer-contact" href="/munkavedelem">Munkavédelem</a>
                    </li>
                    <li>
                        <a className="footer-contact" href="/tuzvedelem">Tűzvédelem</a>
                    </li>
                    <li>
                        <a className="footer-contact" href="/kornyezetvedelem">Környezetvédelem</a>
                    </li>
                    <li>
                        <a className="footer-contact" href="/referenciak">Referenciák</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;