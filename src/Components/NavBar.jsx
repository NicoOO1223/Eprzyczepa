import React, { useState, useEffect } from 'react';
import './NavBar.css';

function NavBar() {
  // State to store whether the page has been scrolled down
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Set to true when scrolled more than 50px
    } else {
      setScrolled(false); // Reset to false when scroll is back to the top
    }
  };

  // Add scroll event listener when component mounts and clean up when it unmounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <ul className='nav-menu'>
          <li className='nav-item' onClick={() => scrollToSection('hero')}>
            Start
          </li>
          <li className='nav-item' onClick={() => scrollToSection('oferta')}>
            Oferta
          </li>
          <li className='nav-item' onClick={() => scrollToSection('info')}>
            O nas
          </li>
          <li className='nav-item' onClick={() => scrollToSection('karty')}>
            Przyczepy
          </li>
          <li className='nav-item' onClick={() => scrollToSection('kontakt')}>
            Kontakt
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
