import React from "react";
import "./Info.css";
import sea from '../images/eprzyczepa.png'

const Info = () => {
  return (
    <div className="onas" id="info">
      <div className="about-container">
        {/* First Section - Image with First h2 and p */}
        <div className="section-1">
        <div class="about-text">
  <h2>O nas</h2>
  
  <p>
    Od prawie 20 lat spędzamy wraz z całą rodziną wakacje w Chałupach. 
    Dzieci od najmłodszych lat miały kontakt z wodą i wiatrem, co u jednego z nich 
    przerodziło się w życiową zajawkę, a nawet stało się stylem życia.
  </p>

  <h3>Jak to się zaczęło?</h3>
  <p>
    Początkowo były to wakacje pełne pływania przy każdej wietrznej prognozie, 
    relaksu na plaży — gdy wiatru brakowało — oraz wspólnych imprez.
  </p>

  <h3>Od pasji do pracy</h3>
  <p>
    Z czasem ta przyjemność zaczęła łączyć się również z pracą. 
    Zaczęliśmy wynajmować przyczepy i świadczyć drobne usługi serwisowe "wokół kempingowe".
  </p>

  <h3>Chałupy dziś</h3>
  <p>
    Spędzanie wolnego czasu na Półwyspie Helskim, na polu kempingowym Albatros i w Chałupach 
    zawsze było i nadal jest niezwykle popularne wśród młodzieży oraz dorosłych.
  </p>

  <h3>Dlaczego Chałupy?</h3>
  <p>
    Chałupy znajdują się w pięknej nadmorskiej okolicy, z dala od miejskiego zgiełku, 
    w samym sercu mekki kitesurfingu i windsurfingu. 
    Liczne szkółki, beach bary i inne atrakcje sprawiają, że chce się tu wracać każdego lata.
  </p>

  <p>
    To wszystko sprawia, że Chałupy i przyczepy kempingowe stały się synonimem wakacyjnej przygody, 
    swobodnej atmosfery, wytchnienia oraz unikalnego klimatu — a nawet stylu życia!
  </p>

  <p><strong>Chałupy to stan umysłu 🙂</strong></p>
</div>

          <div className="about-image">
            <img
              src={sea}
              alt="Chałupy Beach"
            />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Info;


