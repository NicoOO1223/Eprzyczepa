import React from 'react';
import './Oferta.css';
import img1 from '../Img/kalendarz-b.png'
import img2 from '../Img/hajs-g.png'
import img3 from '../Img/Loc.png'


function Oferta() {
  return (
    <div className="oferta" id="oferta">
      <div className='oferta-container'>
      <h1>Wynajem przyczep kempingowych</h1>
      <p>
      Marzysz o wakacjach pełnych luzu, blisko natury i z widokiem na morze? Wynajmij naszą przyczepę kempingową na Chałupach i poczuj wakacyjny klimat, jakiego szukasz!
      </p>
      <div className="items-container">
        
  <div className="item">
  <img src={img1}></img>
  <h2>Kiedy?</h2>
    <p>
    Przyczepy można wynająć przez całe wakacje, warto jednak zarezerwować z wyprzedzeniem, dostepnosc szybko maleje.
    </p>
  </div>
  <div className="item">
  <img src={img2}></img>
  <h2>Za ile?</h2>
    <p>
      Ceny zaczynają się już od 230 zł za dobę. 
      Zadzwoń do nas, a dobierzemy ofertę idealnie dopasowaną do Twoich potrzeb i budżetu!
    </p>
  </div>
  <div className="item">
  <img src={img3}></img>
  <h2>Gdzie?</h2>
    <p>
    Przyczepy znajdują się na Albatros 5,5,<br/> w otoczeniu licznych udogodnień jak sklepy, restauracje, szkółki oraz wypożyczalnie! </p>
  </div>
</div>
</div>
</div>
  );
}

export default Oferta;
