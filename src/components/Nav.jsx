import React, { memo, useState } from 'react';
import { NavContainer } from '../styled/tamraevStyle';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const Nav = memo(({ isMain } = false) => {
   const [isNavActive, setIsNavActive] = useState(false);
   const toggleNav = () => {
      setIsNavActive(!isNavActive);
   };
   return (
      <NavContainer line_color={isMain ? '#fff' : '#002c5f'} nav_bottom_margin={isMain ? '-120px' : '0px'}>
         <div className={`bg ${isNavActive ? 'on' : ''}`}></div>
         <i onClick={toggleNav}>
            <div className={`hamburger ${isNavActive ? 'is-active' : ''}`} id="hamburger-2">
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </i>
         <nav className="gnb">
            <h1>
               <Link to={'/'}>
                  <img src={isMain ? './images/common/logo.png' : './images/common/logo_b.png'} alt="" />
               </Link>
            </h1>
         </nav>
         <nav className={`scrollNav ${isNavActive ? 'on' : ''}`}>
            <div className="swiper-box">
               <Swiper
                  className="nav-swiper"
                  slidesPerView="1"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  modules={[Autoplay]}
                  noSwipingClass="swiper-no-swiping"
                  speed={10}
                  loop={true}>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_1.jpg" alt="gnb_slider_1" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_2.jpg" alt="gnb_slider_2" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_3.jpg" alt="gnb_slider_3" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_4.jpg" alt="gnb_slider_4" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_5.jpg" alt="gnb_slider_5" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-no-swiping">
                     <img src="./images/common/gnb_slider_6.jpg" alt="gnb_slider_6" />
                  </SwiperSlide>
               </Swiper>
            </div>
            <div className="list-box">
               <ul>
                  <li>
                     <Link to={'/'}>HOME</Link>
                  </li>
                  <li>
                     <Link to={'/info'}>탐라는 전기차</Link>
                  </li>
                  <li>
                     <Link to={'/hyundaievList'}>전기차 소개</Link>
                  </li>
                  <li>
                     <Link to={'/noticeList'}>JEJU 전기차 관련 소식</Link>
                  </li>
               </ul>
            </div>
         </nav>
      </NavContainer>
   );
});

export default Nav;
