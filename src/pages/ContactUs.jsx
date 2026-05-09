import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import '../css/ContactUs.css';
import selfieImage from '../assets/pappzsolt.jpg';
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import img1 from '/src/assets/img1.jpg';

const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Kapcsolat - EHS Szolgáltatás</title>
                <meta name="description" content="Amennyiben Munkavédelemmel, Tűzvédelemmel, Környezetvédelemmel vagy Energiahatékonysággal kapcsolatos kérdésük, megoldandó feladatuk merülne fel állunk szíves rendelkezésükre." />
                <meta property="og:image" content={new URL(img1, "https://ehs-szolgaltatas.com").href} />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Kapcsolat – EHS Szolgáltatás",
                        "url": "https://ehs-szolgaltatas.com/kapcsolat",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Papp Zsolt",
                            "jobTitle": "EHS Specialista",
                            "telephone": "+36308647319",
                            "email": "info@ehs-szolgaltatas.com",
                            "sameAs": "https://www.linkedin.com/in/zsolt-papp-8270582b4/"
                        }
                    }
                `}</script>
            </Helmet>
            <main className="contact-us-container">
                <section className="contact-us-section">
                    <h1>Kapcsolat</h1>
                    <div className="contact-content-wrapper">
                        <div className="contact-text-content">
                            <div className="contact-us-item">
                                <p>Amennyiben <Link to="/munkavedelem">Munkavédelemmel</Link>, <Link to="/tuzvedelem">Tűzvédelemmel</Link>, <Link to="/kornyezetvedelem">Környezetvédelemmel</Link> vagy <Link to="/energiahatekonysag">Energiahatékonysággal</Link> kapcsolatos kérdésük, megoldandó feladatuk merülne fel állunk szíves rendelkezésükre a következő elérhetőségeinken vagy személyes megbeszélés alkalmával felajánljuk támogatásunkat.</p>
                            </div>
                            <div className="contact-us-item">
                                <p>Várjuk szíves érdeklődésüket.</p>
                            </div>
                            <div className="contact-person-title">
                                <p>Papp Zsolt EHS Specialista</p>
                            </div>
                            <ContactForm />
                            <address className="contact-info-items">
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
                                    <a href="https://www.linkedin.com/in/zsolt-papp-8270582b4/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                                </div>
                            </address>
                        </div>
                        <div className="contact-image-wrapper">
                            <img
                                src={selfieImage}
                                alt="Papp Zsolt EHS Specialista"
                                className="contact-selfie"
                                width="400"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ContactUs;