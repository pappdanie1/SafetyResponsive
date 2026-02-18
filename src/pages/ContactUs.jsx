import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import '../css/ContactUs.css';
import selfieImage from '../assets/pappzsolt.jpg';
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import img1 from '/src/assets/img1.jpg';

const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Kapcsolat - EHS Szolgáltatás</title>
                <meta name="description" content="Amennyiben Munkavédelemmel, Tűzvédelemmel, Környezetvédelemmel vagy Energiahatékonysággal kapcsolatos kérdésük, megoldandó faladatuk merülne fel állunk szíves rendelkezésükre." />
                <meta property="og:image" content={new URL(img1, "https://ehs-szolgaltatas.com").href} />
            </Helmet>
            <div className="contact-us-container">
                <section className="contact-us-section">
                    <h1>Kapcsolat</h1>
                    <div className="contact-content-wrapper">
                        <div className="contact-text-content">
                            <div className="contact-us-item">
                                <p>Amennyiben Munkavédelemmel, Tűzvédelemmel, Környezetvédelemmel vagy Energiahatékonysággal kapcsolatos kérdésük, megoldandó faladatuk merülne fel állunk szíves rendelkezésükre a következő elérhetőségeinken vagy személyes megbeszélés alkalmával felajánljuk támogatásunkat.</p>
                            </div>
                            <div className="contact-us-item">
                                <p>Várjuk szíves érdeklődésüket.</p>
                            </div>
                            <div className="contact-person-title">
                                <p>Papp Zsolt EHS Specialista</p>
                            </div>
                            <ContactForm />
                            <div className="contact-info-items">
                                <div className="contact-us-item">
                                    <IoPhonePortraitOutline className="contact-us-icon" />
                                    <a href="tel:+36308647319">+36 30 8647319</a>
                                </div>
                                <div className="contact-us-item">
                                    <MdEmail className="contact-us-icon" />
                                    <a href="mailto:info@ehs-szolgaltatas.com">info@ehs-szolgaltatas.com</a>
                                </div>
                                <div className="contact-us-item">
                                    <FaLinkedin className="contact-us-icon" />
                                    <a href="https://www.linkedin.com/in/zsolt-papp-8270582b4/">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-image-wrapper">
                            <img src={selfieImage} alt="Papp Zsolt" className="contact-selfie" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactUs;