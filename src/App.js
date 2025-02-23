import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Oferta from './Components/Oferta';
import Cennik from './manual/Cennik';
import Kontakt from './Components/Kontakt';
import Karty from './manual/Karty';
import Mapa from './manual/mapa';
import Footer from './Components/Footer';
import Hero from './manual/Hero';
import Info from './manual/Info';
import AboutUs from './Components/Onas';
function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <Oferta />
    <Mapa />
    <Info />
    <Karty />
    <Cennik />
    <Kontakt />
    </>
  )
}

export default App