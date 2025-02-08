import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Oferta from './Components/Oferta';
import Przyczepy from './Components/Przyczepy';
import Cennik from './Components/Cennik';
import Kontakt from './Components/Kontakt';

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <Oferta />
    <Przyczepy />
    <Cennik />
    <Kontakt />
    </>
  )
}

export default App