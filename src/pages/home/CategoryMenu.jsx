import React, { memo, useState } from 'react';
import { ContentMenu } from '../../styled/tamraevStyle';
import ContentSearch from './ContentSearch';

const CategoryMenu = memo(() => {
   const [menus, setMenus] = useState([
      { id: 1, eng: 'PopularContent', kor: '인기 콘텐츠', isChk: true },
      { id: 2, eng: 'IntroductionToElectricVehicles', kor: '전기차 소개', isChk: false },
      { id: 3, eng: 'smartElectricCarTrip', kor: '슬기로운 전기차 여행', isChk: false },
      { id: 4, eng: 'ChargingAndTroubleshooting', kor: '충전 및 문제 대처법', isChk: false },
      { id: 5, eng: 'FAQ', kor: 'FAQ', isChk: false },
      { id: 6, eng: 'FindElectricVehicleChargingStations', kor: '제주 전기차 충전소 찾기', isChk: false },
      { id: 7, eng: 'JejuElectricVehicleNews', kor: '제주 전기차 뉴스', isChk: false },
   ]);
   const [isSearch, setIsSearch] = useState(true);

   return (
      <ContentMenu>
         <h3>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h3>
         <ul>
            {menus.map(item => (
               <li key={item.id} className={item.isChk ? 'on' : ''}>
                  {item.kor}
               </li>
            ))}
            <li>
               <button onClick={() => setIsSearch(!isSearch)}>
                  {isSearch ? <i className="xi-close"></i> : <i className="xi-search"></i>}
                  {isSearch ? '닫기' : '검색'}
               </button>
            </li>
         </ul>
         {<ContentSearch isSearch={isSearch} />}
      </ContentMenu>
   );
});

export default CategoryMenu;
