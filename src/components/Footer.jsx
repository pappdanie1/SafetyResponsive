import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-text">
                Biztonság a Cége Sikere Érdekében!
            </div>
            <div className="contact">
                <h3>Kapcsolat</h3>
                <div className="contact-info">
                    <p><MdEmail /> Email:</p>
                    <a href="mailto:pappzsolt6903@gmail.com">pappzsolt6903@gmail.com</a>
                    <p><IoPhonePortraitOutline /> Telefon:</p>
                    <a href="tel:+36308647319">+36 30 8647319</a>
                </div>
            </div>
            <div className="links">
                <h3>Linkek</h3>
                <ul>
                    <li>
                        <a href="/">Kezdőlap</a>
                    </li>
                    <li>
                        <a href="/kapcsolat">Kapcsolat</a>
                    </li>
                    <li>
                        <a href="/munkavedelem">Munkavédelem</a>
                    </li>
                    <li>
                        <a href="/tuzvedelem">Tűzvédelem</a>
                    </li>
                    <li>
                        <a href="/kornyezetvedelem">Környezetvédelem</a>
                    </li>
                    <li>
                        <a href="/referenciak">Referenciák</a>
                    </li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;