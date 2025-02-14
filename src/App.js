import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Oferta from './Components/Oferta';
import Przyczepy from './Components/Przyczepy';
import Cennik from './manual/Cennik';
import Kontakt from './Components/Kontakt';
import Cards from './Components/Cards';
import Karty from './manual/Karty';
import Mapa from './manual/mapa';
import Footer from './Components/Footer';
import Hero from './manual/Hero';

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <Oferta />
    <Mapa />
    <Karty />
    <Cennik />
    <Footer />
    </>
  )
}

export default App