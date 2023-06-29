import React, { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { VisualContainer } from '../../styled/tamraevStyle';

const Visual = memo(() => {
   return (
      <VisualContainer>
         <Swiper
            className="visual-swiper"
            slidesPerView="1"
            direction={'vertical'}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
            speed={10}
            loop={true}
            onSlideChange={() => {}}>
            <SwiperSlide style={{ position: 'relative' }}>
               <div className="text-box">
                  <strong>탐라는 전기차</strong>
                  <p>
                     전기차와 함께 제주 여행을 준비하는 당신에게
                     <br />
                     필요한 모든 정보와 꿀팁
                  </p>
               </div>
               <img src="./images/common/main_slider_1.jpg" alt="main_slider_1" />
            </SwiperSlide>
            <SwiperSlide>
               <div className="text-box">
                  <strong>탐라는 전기차</strong>
                  <p>
                     전기차와 함께 제주 여행을 준비하는 당신에게
                     <br />
                     필요한 모든 정보와 꿀팁
                  </p>
               </div>
               <img src="./images/common/main_slider_2.jpg" alt="main_slider_2" />
            </SwiperSlide>
            <SwiperSlide>
               <div className="text-box">
                  <strong>탐라는 전기차</strong>
                  <p>
                     전기차와 함께 제주 여행을 준비하는 당신에게
                     <br />
                     필요한 모든 정보와 꿀팁
                  </p>
               </div>
               <img src="./images/common/main_slider_3.jpg" alt="main_slider_3" />
            </SwiperSlide>
         </Swiper>
      </VisualContainer>
   );
});

export default Visual;
