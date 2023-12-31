import React, { memo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import './styles.scss';

const SlideImg = memo(({ slideimgUrl }) => {
   return (
      <div className="slideBox">
         <Swiper
            className="outBtnSwiper"
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}>
            {slideimgUrl.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <img src={item} alt="" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
});

export default SlideImg;
