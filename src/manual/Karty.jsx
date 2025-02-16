import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Karty.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../Img/wilk.jpeg'
import img2 from '../Img/adria.jpg'

function Karty() {
    const swiperRefs = useRef([]);

    const campers = [
        { id: 1, name: "Przyczepa Wilk", images: [img1, img2] },
        { id: 2, name: "Przyczepa Adria", images: [img1, img2] },
        { id: 3, name: "Przyczepa Tabbert", images: [img1, img2] },
        { id: 4, name: "Przyczepa Hobby", images: [img1, img2] },
    ];

    return (
        <div className='karty'>
            <div className='container'>
                <h1 className='title'>Poznaj nasze przyczepy</h1>
                <div className='card-container'>
                    {campers.map((camper, idx) => (
                        <div key={camper.id} className='card'>
                            <h3 className='card-header'>{camper.name}</h3>
                            <Swiper
                                className='swiper'
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination
                                onSwiper={(swiper) => swiperRefs.current[idx] = swiper}
                            >
                                {camper.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={camper.name} className='card-image' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            <div className="navigation-container">
                                <div className="arrow arrow-left" onClick={() => swiperRefs.current[idx]?.slidePrev()}></div>
                                <div className="arrow arrow-right" onClick={() => swiperRefs.current[idx]?.slideNext()}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Karty;
