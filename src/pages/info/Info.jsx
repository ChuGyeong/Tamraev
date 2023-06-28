import React, { memo } from 'react';
import Nav from '../../components/Nav';
import { InfoContainer } from '../../styled/tamraevStyle';

const Info = memo(() => {
   return (
      <InfoContainer>
         <Nav />
         <div className="inner">
            <div className="bg"></div>
            <img src="images/info/info.png" alt="탐라는 전기차" />
         </div>
      </InfoContainer>
   );
});

export default Info;
