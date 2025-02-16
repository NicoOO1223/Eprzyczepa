import React from 'react'
import './Cennik.css';


function Cennik() {
  return (
    <div className='cennik'>
      <div className='cennik-container'>
        <h1 className='header'>Cennik</h1>
        <div className='line'></div>
        <img src={`${process.env.PUBLIC_URL}/images/Cennik.png`} class='cennik-background' alt='Cennik'></img>
        <div className='line'></div>
        

      </div>
    </div>
  )
}

export default Cennik