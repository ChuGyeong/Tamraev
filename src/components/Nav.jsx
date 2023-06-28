import React, { memo, useState } from 'react';
import { NavContainer } from '../styled/tamraevStyle';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Nav = memo(() => {
   const [isNavActive, setIsNavActive] = useState(false);

   const toggleNav = () => {
      setIsNavActive(!isNavActive);
   };
   return (
      <NavContainer>
         <div className={`bg ${isNavActive ? 'on' : ''}`}></div>;
         <nav className="gnb">
            <h1>
               <Link to={'/'}>
                  <img src="images/common/logo_b.png" alt="" />
               </Link>
            </h1>
            <i onClick={toggleNav}>
               <div className={`hamburger ${isNavActive ? 'is-active' : ''}`} id="hamburger-2">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
               </div>
            </i>
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
                     <Link to={'/'}>탐라는 전기차</Link>
                  </li>
                  <li>
                     <Link to={'/'}>JEJU 전기차 관련 소식</Link>
                  </li>
               </ul>
            </div>
         </nav>
      </NavContainer>
   );
});

export default Nav;
