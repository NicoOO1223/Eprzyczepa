import React from 'react'
import './NavBar.css';

function NavBar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth'});
        }
    };
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <ul className='nav-menu'>
                <li className='nav-item' onClick={() => scrollToSection('start')}>
                    Start
                </li>
                <li className='nav-item' onClick={() => scrollToSection('oferta')}>
                    Oferta
                </li>
                <li className='nav-item' onClick={() => scrollToSection('przyczepy')}>
                    Przyczepy
                </li>
                <li className='nav-item' onClick={() => scrollToSection('cennik')}>
                    Kontakt
                </li>
                <li className='nav-item'>
                    Regulamin
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar