import React from "react";
import '../css/Contact.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {

    return (
        <div className="center-section-main" >
            <div className="main-contact-section" >
                <h2>Kapcsolat</h2>
                <div className="main-contact-info" >
                    <div className="main-name">
                        <p>Papp Zsolt</p>
                    </div>
                    <div className="main-adddress" >
                        <p>4150, Püspökladány, Zrínyi u. 50.</p>
                    </div>
                    <div className="main-phone" >
                        <IoPhonePortraitOutline className="main-icon" />
                        <a href="tel:+36308647319">+36 30 8647319</a>
                    </div>
                    <div className="main-email" >
                        <MdEmail className="main-icon" />
                        <a href="mailto:pappzsolt6903@gmail.com">pappzsolt6903@gmail.com</a>
                    </div>
                    <div className="main-email" >
                        <FaLinkedin className="main-icon" />
                        <a href="https://www.linkedin.com/in/zsolt-papp-8270582b4/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact