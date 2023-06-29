import React, { useRef, useState, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.scss';
import { Grid, Pagination } from 'swiper';

const CenteredImg = memo(({ item }) => {
   return (
      <div>
         <Swiper
            slidesPerView={3}
            centeredSlides={true}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="centered">
            {item.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <img src={item} alt="" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
});

export default CenteredImg;
