import React, { memo } from 'react';
import { FooterContainer } from '../styled/tamraevStyle';
import { Link } from 'react-router-dom';

const Footer = memo(() => {
   return (
      <FooterContainer>
         <img src="../../images/common/logo.png" alt="" />
         <ul>
            <li>
               <Link to={'/'}>탐라는 전기차</Link>
            </li>
            <li>
               <Link to={'/'}>전기차 충전소 위치</Link>
            </li>
            <li>
               <Link to={'noticeList'}>JEJU 전기차 관련 소식</Link>
            </li>
            <li>
               <Link to={'/'}>이용약관</Link>
            </li>
            <li>
               <Link to={'/'}>개인정보처리방침</Link>
            </li>
         </ul>
         <span>COPYRIGHT ⓒ All rights RESERVED.</span>
      </FooterContainer>
   );
});

export default Footer;
