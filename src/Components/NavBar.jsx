import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    Start
                </li>
                <li className='nav-item'>
                    Oferta
                </li>
                <li className='nav-item'>
                    Przyczepy
                </li>
                <li className='nav-item'>
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