import React, { memo } from 'react';
import { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { VisualContainer } from '../../styled/tamraevStyle';

const Visual = memo(() => {
   return (
      <VisualContainer>
         <Swiper
            slidesPerView={1}
            onSlideChange={() => {}}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, A11y]}
            pagination={{ clickable: true }}>
            <SwiperSlide>
               <img src="./images/common/main_slider_1.jpg" alt="main_slider_1" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="./images/common/main_slider_2.jpg" alt="main_slider_2" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="./images/common/main_slider_3.jpg" alt="main_slider_3" />
            </SwiperSlide>
         </Swiper>
      </VisualContainer>
   );
});

export default Visual;
