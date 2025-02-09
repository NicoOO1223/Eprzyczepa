import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Karty.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

function Karty() {
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
      
  return (
    <div className='karty'>
    <div className='container'>
        <h1 className='title'>Poznaj nasze przyczepy</h1>
        <div className='display'>
            {campers.map((camper) => (
                <div key={camper.id} className='card'>
                    <h3 className='card-header'>{camper.name}</h3>
                      <Swiper className='swiper' modules={[Navigation, Pagination]} navigation pagination>

                      </Swiper>
                        {camper.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img src={image} alt={camper.name} className='card-image'></img>
                          </SwiperSlide>
                        ))}
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Karty