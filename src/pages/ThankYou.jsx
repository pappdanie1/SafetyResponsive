import React from 'react';
import { Link } from 'react-router-dom';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';
import '../css/ThankYou.css';

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Köszönjük megkeresését | EHS Szolgáltatás</title>
        <meta name="description" content="Köszönjük megkeresését, hamarosan felvesszük Önnel a kapcsolatot." />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="thankyou-container">
        <div className="thankyou-content">
          <IoCheckmarkCircle className="success-icon" />
          
          <h1>Köszönjük az üzenetét!</h1>
          <p>Hamarosan felvesszük Önnel a kapcsolatot.</p>
          
          <Link to="/" className="back-button">
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYou;