import React, { memo } from 'react';
import Nav from '../../components/Nav';
import { HyundaievContainer } from '../../styled/tamraevStyle';
import { useAxios } from '../../hooks/useAxios';
import HyundaievItem from './HyundaievItem';

const HyundaievList = memo(() => {
   const {
      data: hyundaievData,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/f85da4ae61e13fb8046ccc0d30ac926c/raw/cb13fb05af04c422936ccf5875a9320442e70e01/hyundaiev.json',
   );

   return (
      <HyundaievContainer>
         <Nav />
         <div className="hyundaievBox">
            <h3>전기차 소개</h3>
            <p>다양한 전기차 정보를 한눈에 확인해보세요.</p>
            <ul>
               {hyundaievData.map(item => (
                  <HyundaievItem item={item} key={item.id} />
               ))}
            </ul>
         </div>
      </HyundaievContainer>
   );
});

export default HyundaievList;
