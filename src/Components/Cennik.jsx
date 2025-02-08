import React from 'react';
import './Cennik.css';

function Cennik() {
  return (
    <div className="location-container">
      <div className="cennik-container">
        <h1>Cennik</h1>
        <div className="cennik-details">
          <div className="price-item">
            <span>Majówka</span>
            <span>290 PLN / doba</span>
          </div>
          <div className="price-item">
            <span>Od 31 maja do 18 czerwca</span>
            <span>230 PLN / doba</span>
          </div>
          <div className="price-item">
            <span>Boże Ciało</span>
            <span>1600 PLN (4 dni)</span>
          </div>
          <div className="price-item">
            <span>Od 22 czerwca do 6 lipca</span>
            <span>480 PLN / doba</span>
          </div>
          <div className="price-item">
            <span>Od 6 lipca do 16 sierpnia</span>
            <span>580 PLN / doba</span>
          </div>
          <div className="price-item">
            <span>Od 16 sierpnia do 23 sierpnia</span>
            <span>480 PLN / doba</span>
          </div>
          <div className="price-item">
            <span>Od 23 sierpnia do 31 sierpnia</span>
            <span>330 PLN / doba</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cennik;
