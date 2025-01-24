import React from 'react';
import './Oferta.css';

function Oferta() {
  return (
    <div className="oferta">
      <h1>Wynajem przyczep kempingowych</h1>
      <p>
        Atrakcyjne miejsce na spędzenie urlopu bądź wakacji? Ciche i spokojne otoczenia do wypoczynku? 
        Przechadzki wieczorami po mokrym piasku i relaks wśród szumu morza? 
        To u nas! <br/>
        Oferujemy Państwu tanie i atrakcyjnie wyposażone przyczepy kempingowe!
      </p>
      <div className="items-container">
  <div className="item">
    <h2>Oferta</h2>
    <p>
      Nasze przyczepy kempingowe są w pełni wyposażone, aby zapewnić Państwu 
      komfort podczas wypoczynku. Oferujemy różnorodne modele dostosowane do 
      potrzeb zarówno rodzin, jak i par szukających przygód.
    </p>
  </div>
  <div className="item">
    <h2>Ceny</h2>
    <p>
      Ceny zaczynają się już od x zł za dobę. Oferujemy elastyczne pakiety 
      dostosowane do długości pobytu, a przy wynajmie na dłużej przygotowaliśmy 
      atrakcyjne zniżki.
    </p>
  </div>
  <div className="item">
    <h2>Lokalizacja</h2>
    <p>
      Nasze przyczepy znajdują się na Chalupach, malowniczej miejscowosci nad baltykiem, w 
      otoczeniu lasów i zaledwie x metrów od piaszczystej plaży. To idealne 
      miejsce na relaks z dala od zgiełku miasta.
    </p>
  </div>
</div>
</div>
  );
}

export default Oferta;
