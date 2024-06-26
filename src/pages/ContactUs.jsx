import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import '../css/ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <section className="contact-us-section">
                <h1>Kapcsolat</h1>
                <div className="contact-us-subsection">
                    <div className="contact-us-info">
                        <div className="contact-us-item">
                            <h2>Amennyiben Munkavédelemmel, Tűzvédelemmel vagy Környezetvédelemmel kapcsolatos kérdésük, megoldandó faladatuk merülne fel állunk szíves rendelkezésükre a következő elérhetőségeinken vagy személyes megbeszélés alkalmával. Várjuk szíves érdeklődésüket.</h2>
                        </div>
                        <div className="contact-us-item">
                            <IoPhonePortraitOutline className="contact-us-icon" />
                            <a className="contact-us-info" href="tel:+36308647319">+36 30 8647319</a>
                        </div>
                        <div className="contact-us-item">
                            <MdEmail className="contact-us-icon" />
                            <a className="contact-us-info" href="mailto:pappzsolt6903@gmail.com">pappzsolt6903@gmail.com</a>
                        </div>
                        <div className="contact-us-item">
                            <FaLinkedin  className="contact-us-icon" />
                            <a className="contact-us-info" href="https://www.linkedin.com/in/zsolt-papp-8270582b4/">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;