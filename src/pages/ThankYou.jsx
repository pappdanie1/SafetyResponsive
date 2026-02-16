import React from 'react';
import { Link } from 'react-router-dom';
import { IoCheckmarkCircle } from 'react-icons/io5';
import '../css/ThankYou.css';

const ThankYou = () => {
  return (
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
  );
};

export default ThankYou;