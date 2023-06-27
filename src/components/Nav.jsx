import React, { memo, useState } from 'react';
import { NavContainer } from '../styled/tamraevStyle';
import { Link } from 'react-router-dom';

const Nav = memo(() => {
   const [isNavActive, setIsNavActive] = useState(false);

   const toggleNav = () => {
      setIsNavActive(!isNavActive);
   };
   return (
      <NavContainer>
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
      </NavContainer>
   );
});

export default Nav;
