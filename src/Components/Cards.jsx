import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Cards.css";

const campers = [
  {
    id: 1,
    name: "Przyczepa Wilk",
    images: ["/Img/wilk.jpeg", "/Img/adria.jpg"],
  },
  {
    id: 2,
    name: "Przyczepa Adria",
    images: ["/Img/wilk.jpeg", "/Img/adria.jpg"],
  },
  {
    id: 3,
    name: "Przyczepa Tabbert",
    images: ["/Img/wilk.jpeg", "/Img/adria.jpg"],
  },
  {
    id: 4,
    name: "Przyczepa Hobby",
    images: ["/Img/wilk.jpeg", "/Img/adria.jpg"],
  },
];

const Cards = () => {
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="campers-container">
      <h2 className="title">Poznaj nasze Przyczepy</h2>
      <div className="grid">
        {campers.map((camper) => (
          <div key={camper.id} className="camper-card">
            <h3 className="camper-name">{camper.name}</h3>
            <Swiper
          
              navigation={true}
              className="carousel"
            >
              {camper.images.map((image, index) => (
                <SwiperSlide key={index} onClick={() => setSelectedCamper(camper)}>
                  <img src={image} alt={camper.name} className="camper-image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      {selectedCamper && (
        <div className="modal-overlay" onClick={() => setSelectedCamper(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCamper(null)}>×</button>
            <div className="fullscreen-carousel">
              <img src={selectedCamper.images[activeImageIndex]} alt="Fullscreen" className="fullscreen-image" />
            </div>
            <div className="swiper-button-prev" onClick={() => setActiveImageIndex((i) => (i === 0 ? selectedCamper.images.length - 1 : i - 1))}>‹</div>
            <div className="swiper-button-next" onClick={() => setActiveImageIndex((i) => (i === selectedCamper.images.length - 1 ? 0 : i + 1))}>›</div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
