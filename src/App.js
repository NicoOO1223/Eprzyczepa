import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Oferta from './Components/Oferta';
import Przyczepy from './Components/Przyczepy';
import Cennik from './Components/Cennik';
import Kontakt from './Components/Kontakt';
import Cards from './Components/Cards';
import Karty from './manual/Karty';
import Mapa from './manual/mapa';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <Oferta />
    <Mapa />
    <Karty />
    <Footer />
    </>
  )
}

export default App