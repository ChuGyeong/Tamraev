import React, { memo } from 'react';
import { HyundaievBox } from '../../styled/tamraevStyle';
import Numeral from 'numeral';
import { Link } from 'react-router-dom';

const HyundaievItem = memo(({ item }) => {
   const { mainImage, name, releaseDate, price, motor, battery, id, title } = item;

   return (
      <>
         <HyundaievBox>
            <div className="imgBox">
               <img src={mainImage} alt="" />
            </div>
            <div className="textBox">
               <h4>{name}</h4>
               <span>{releaseDate}</span>
               <p>가격 {Numeral(price.slice(0, 4)).format(0, 0)}만원</p>
               <p>연료 {motor.fuel}</p>
               <p>주행 {battery.mileage}</p>
            </div>
            <div className="moreBox">
               <button>
                  <Link to={`/hyundaievDetail/${id}`}>
                     {title}
                     <i className="xi-library-books"></i>
                     <br />
                     <em>자세히보기</em>
                  </Link>
               </button>
               <button>
                  <Link to={`/hyundaievImg/${id}`}>
                     <i className="xi-library-image"></i>
                     <br />
                     <em>이미지 더보기</em>
                  </Link>
               </button>
            </div>
         </HyundaievBox>
      </>
   );
});

export default HyundaievItem;
