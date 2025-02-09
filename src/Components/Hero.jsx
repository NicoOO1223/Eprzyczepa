import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: "url('/Img/trailer.jpg')" }}
    >
     
        <div className="cta">
          <a href="#">Zobacz nasze przyczepy →</a>
        </div>
    
    </section>
  );
};

export default Hero;