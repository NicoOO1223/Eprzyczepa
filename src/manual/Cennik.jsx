import React from 'react'
import './Cennik.css';
import img from '../Img/Cennik.png'

function Cennik() {
  return (
    <div className='cennik'>
      <div className='cennik-container'>
        <h1 className='header'>Cennik</h1>
        <div className='line'></div>
        <img src={img} class='cennik-background' alt='Cennik'></img>
        <div className='line'></div>
        

      </div>
    </div>
  )
}

export default Cennik