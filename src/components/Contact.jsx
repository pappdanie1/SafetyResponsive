import React from "react";
import '../css/Contact.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    return (
        <div className="contact-section" >
            <h2>Kapcsolat</h2>
            <div className="contact-info" >
                <div className="phone" >
                    <IoPhonePortraitOutline className="icon"/>
                    <p>Telefon:</p>
                    <a href="tel:+36308647319">+36 30 8647319</a>
                </div>
                <div className="email" >
                    <MdEmail className="icon"/>
                    <p>Email:</p>
                    <a href="mailto:pappzsolt6903@gmail.com">pappzsolt6903@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact