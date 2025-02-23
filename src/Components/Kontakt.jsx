import React from 'react';
import './Kontakt.css';

function Kontakt() {
  return (
    <div className="footer-container" id='kontakt'>
      <div className="footer-content">
        {/* Right Section - Contact */}
        <div className="contact-section">
          <h2>Skontaktuj się z nami!</h2>
          <div className="contact-details">
            <div className="contact-item">
              <img src={`${process.env.PUBLIC_URL}/images/Loc-r.png`} alt="Location Icon" />
              <p><strong>Address:</strong> 123 Street Name, City, Country</p>
            </div>
            <div className="contact-item">
              <img src={`${process.env.PUBLIC_URL}/images/Mail-b.png`} alt="Email Icon" />
              <p><strong>Email:</strong> example@email.com</p>
            </div>
            <div className="contact-item">
              <img src={`${process.env.PUBLIC_URL}/images/Phone-g.png`} alt="Phone Icon" />
              <p><strong>Phone:</strong> +48 123 456 789</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Kontakt;
