import React from "react";
import '../css/Contact.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {

    return (
        <div className="center-section-main">
          <div className="main-contact-section">
            <h2>Kapcsolat</h2>
            <div className="main-contact-info">
              <div className="main-name">
                <p>
                  Amennyiben Munkavédelemmel, Tűzvédelemmel vagy Környezetvédelemmel
                  kapcsolatos kérdésük, megoldandó feladatuk merülne fel állunk
                  szíves rendelkezésükre a következő elérhetőségeinken vagy
                  személyes megbeszélés alkalmával.<br></br> Várjuk szíves érdeklődésüket.
                </p>
              </div>
            </div>
            <div className="main-contact-info-b" >
            <div className="main-phone">
                <IoPhonePortraitOutline className="main-icon" />
                <a href="tel:+36308647319">+36 30 8647319</a>
              </div>
              <div className="main-email">
                <MdEmail className="main-icon" />
                <a href="mailto:pappzsolt6903@gmail.com">pappzsolt6903@gmail.com</a>
              </div>
              <div className="main-email">
                <FaLinkedin className="main-icon" />
                <a href="https://www.linkedin.com/in/zsolt-papp-8270582b4/">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Contact