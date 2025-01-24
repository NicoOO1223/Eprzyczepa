import React from 'react';
import './Przyczepy.css';

function Przyczepy() {
  return (
    <div className="camping-container">
      <h1>Nasze Przyczepy Kempingowe</h1>
      <div className="camping-houses">
        <div className="camping-house">
          <div className="image">
            <img src="/Img/wilk.jpeg" alt="Przyczepa Wilk" />
          </div>
          <div className="description">
            <h2>Przyczepa Wilk</h2>
            <p>
              Przyczepa w malowniczym miejscu z wygodami i przestronnym wnętrzem. Oferuje 
              komfortowe łóżka, dużo miejsca do przechowywania oraz urokliwy widok na las. 
              Idealna dla par, które szukają spokojnego miejsca na relaks z dala od zgiełku miasta.
            </p>
          </div>
        </div>
        <div className="camping-house">
          <div className="image">
            <img src="/Img/adria.jpg" alt="Przyczepa Adria" />
          </div>
          <div className="description">
            <h2>Przyczepa Adria</h2>
            <p>
              Elegancka przyczepa z nowoczesnym wyposażeniem i widokiem na jezioro. Posiada 
              w pełni funkcjonalną kuchnię, przestronny salon oraz duże okna wpuszczające mnóstwo 
              naturalnego światła. Świetna opcja dla rodzin, które cenią sobie komfort i styl.
            </p>
          </div>
        </div>
        <div className="camping-house">
          <div className="image">
            <img src="/Img/tabbert.jpg" alt="Przyczepa Tabbert" />
          </div>
          <div className="description">
            <h2>Przyczepa Tabbert</h2>
            <p>
              Urocza przyczepa z dużym tarasem, idealna dla rodzin. Wyposażona w nowoczesne 
              udogodnienia, takie jak klimatyzacja i szybki dostęp do Wi-Fi. Doskonała na długie 
              wieczory spędzone przy grillu z widokiem na otaczającą przyrodę.
            </p>
          </div>
        </div>
        <div className="camping-house">
          <div className="image">
            <img src="/Img/hobby.jpeg" alt="Przyczepa Hobby" />
          </div>
          <div className="description">
            <h2>Przyczepa Hobby</h2>
            <p>
              Komfortowa przyczepa z luksusowymi udogodnieniami i przestronnym wnętrzem. 
              Posiada elegancki wystrój, duże wygodne łóżka oraz dobrze wyposażoną kuchnię. 
              Stworzona dla tych, którzy chcą cieszyć się wakacjami bez kompromisów.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Przyczepy;
