import React from 'react';
import './Footer.css';
import img1 from '../Img/Loc-r.png'
import img2 from '../Img/Mail-b.png'
import img3 from '../Img/Phone-g.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        
        {/* Left Section - Menu */}
        <div className="footer-menu">
          <h2>Menu</h2>
          <ul className='inner-container'>
            <li><a href="#start">Start</a></li>
            <li><a href="#oferta">Oferta</a></li>
            <li><a href="#przyczepy">Przyczepy</a></li>
            <li><a href="#cennik">Cennik</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
            <li><a href="#regulamin">Regulamin</a></li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div className="contact-section">
          <h2>Skontaktuj się z nami!</h2>
          <div className="contact-details">
            <div className="contact-item">
              <img src={img1} alt="Location Icon" />
              <p><strong>Address:</strong> 123 Street Name, City, Country</p>
            </div>
            <div className="contact-item">
              <img src={img2} alt="Email Icon" />
              <p><strong>Email:</strong> example@email.com</p>
            </div>
            <div className="contact-item">
              <img src={img3} alt="Phone Icon" />
              <p><strong>Phone:</strong> +48 123 456 789</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
