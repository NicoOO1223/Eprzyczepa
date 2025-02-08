import React from "react";
import "./Hero.css";

const campers = [
  { id: 1, name: "Przyczepa Wilk", description: "Idealna dla rodziny", image: "/Img/hobby.jpeg" },
  { id: 2, name: "Przyczepa Hobby", description: "Wygodna i przestrzenna", image: "/Img/wilk.jpeg" },
  { id: 3, name: "Przyczepa Adria", description: "Na wypad z kolegami", image: "/Img/adria.jpg" }
];

const Hero = () => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: "url('/Img/trailer.jpg')" }}
    >
      <div className="overlay">
        <h1>Wynajmij swoja przyczepe!</h1>
        <h4>E-przyczepa.pl</h4>
      </div>
      <div className="content-wrapper">
        <div className="campers-grid">
          {campers.map(camper => (
            <div key={camper.id} className="camper-card">
              <img src={camper.image} alt={camper.name} />
              <h3>{camper.name}</h3>
              <p>{camper.description}</p>
            </div>
          ))}
        </div>
        <div className="cta">
          <a href="#">Zobacz nasze przyczepy →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;