import React, { memo, useState } from 'react';
import { NavContainer } from '../styled/tamraevStyle';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

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
                  <img src={isMain ? 'images/common/logo.png' : 'images/common/logo_b.png'} alt="" />
               </Link>
            </h1>
         </nav>
         <nav className={`scrollNav ${isNavActive ? 'on' : ''}`}>
            <ul className="img-box">
               <li>
                  <img src="./images/common/main_slider_1.jpg" alt="main_slider_1" />
               </li>
            </ul>
            <div className="list-box">
               <ul>
                  <li>
                     <Link to={'/'}>HOME</Link>
                  </li>
                  <li>
                     <Link to={'/info'}>탐라는 전기차</Link>
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
