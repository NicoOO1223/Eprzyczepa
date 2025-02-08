import React from 'react';
import './Oferta.css';

function Oferta() {
  return (
    <div className="oferta" id="oferta">
      <h1>Wynajem przyczep kempingowych</h1>
      <p>
      Marzysz o wakacjach pełnych luzu, blisko natury i z widokiem na morze? Wynajmij naszą przyczepę kempingową na Chałupach i poczuj wakacyjny klimat, jakiego szukasz!
      </p>
      <div className="items-container">
  <div className="item">
  <img src='/Img/kalendarz.png'></img>
    <p>
    Przyczepy można wynająć przez całe wakacje i choc jesteśmy na miejscu cały sezon, 
    warto zarezerwować wcześniej, bo przyczepy szybko znikają.
    </p>
  </div>
  <div className="item">
  <img src='/Img/hajs.png'></img>
    <p>
      Ceny zaczynają się już od 230 zł za dobę. 
      Zadzwoń do nas, a dobierzemy ofertę idealnie dopasowaną do Twoich potrzeb i budżetu!
    </p>
  </div>
  <div className="item">
  <img src='/Img/lokalizacja.png'></img>
    <p>
    Przyczepy znajdują się na Albatros 5,5,<br/> w otoczeniu licznych udogodnień jak sklepy, restauracje, szkółki oraz wypożyczalnie! </p>
  </div>
</div>
</div>
  );
}

export default Oferta;
