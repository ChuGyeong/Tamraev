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
      'https://gist.githubusercontent.com/ChuGyeong/f85da4ae61e13fb8046ccc0d30ac926c/raw/55930ae06ea0394319e38175a75454eea25ad650/hyundaiev.json',
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
