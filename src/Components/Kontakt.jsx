import React from 'react';
import './Kontakt.css';

function Kontakt() {
  return (
    <div className="map-contact-container" id="cennik">
      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2301.944253219077!2d18.49169057690647!3d54.763366872734075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTTCsDQ1JzQ4LjEiTiAxOMKwMjknMzkuNCJF!5e0!3m2!1spl!2spl!4v1737745951789!5m2!1spl!2spl"
          title="Google Maps Location"
          className="location-map"
          allowFullScreen=""
        ></iframe>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Skontaktuj się z nami!</h2>
        <div className="contact-details">
          <img src="/Img/Mail.png" alt="Email Icon" />
          <p><strong>Email:</strong> example@email.com</p>
          <img src="/Img/Phone.png" alt="Phone Icon" />
          <p><strong>Phone:</strong> +48 123 456 789</p>
          <img src="/Img/Loc.png" alt="Location Icon" />
          <p><strong>Address:</strong> 123 Street Name, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
