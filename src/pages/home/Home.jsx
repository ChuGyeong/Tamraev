import React, { memo, useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import Contents from './Contents';
import Popup from './Popup';
import Visual from './Visual';
import Nav from '../../components/Nav';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Home = memo(() => {
   const {
      data: dataList,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/710c08b6a0967c9bb97c83e4e588604f/raw/12780e33b46e459942d09db7faaa58e3e5631758/tamraev.json',
   );
   const [data, setData] = useState(dataList || []);
   const [menus, setMenus] = useState([
      { id: 1, eng: 'PopularContent', kor: '인기 콘텐츠', isChk: true },
      { id: 2, eng: 'IntroductionToElectricVehicles', kor: '전기차 소개', isChk: false },
      { id: 3, eng: 'smartElectricCarTrip', kor: '슬기로운 전기차 여행', isChk: false },
      { id: 4, eng: 'ChargingAndTroubleshooting', kor: '충전 및 문제 대처법', isChk: false },
      { id: 5, eng: 'FAQ', kor: 'FAQ', isChk: false },
      { id: 6, eng: 'FindElectricVehicleChargingStations', kor: '제주 전기차 충전소 찾기', isChk: false },
   ]);
   const [itemNumInPage, setItemNumInPage] = useState(6);
   useEffect(() => {
      if (dataList) {
         setData([...dataList].sort((a, b) => b.like - a.like));
      }
   }, [dataList]);

   const [isPopUp, setIsPopUp] = useState(false);
   const [popUpItem, setPopUpItem] = useState({});

   const onPopUp = item => {
      setIsPopUp(true);
      setPopUpItem(item);
   };

   const onLike = id => {
      setData(data.map(item => (item.id === id ? { ...item, like: item.like + 1 } : item)));
   };

   //  검색어로 검색
   const onSearch = text => {
      setData(dataList.filter(item => item.title.includes(text)));
   };

   //  카테고리 변경
   const changeCategory = id => {
      setMenus(menus.map(item => (item.id === id ? { ...item, isChk: true } : { ...item, isChk: false })));
      setItemNumInPage(6);
   };

   //  카테고리 변경에 따른 데이터 변경
   useEffect(() => {
      const curCategory = menus.find(item => item.isChk === true).eng;
      if (curCategory === 'PopularContent') {
         setData([...dataList].sort((a, b) => b.like - a.like));
      } else {
         setData(dataList.filter(item => item.categories === curCategory).sort((a, b) => b.id - a.id));
      }
   }, [menus]);

   return (
      <div>
         {!loading && data ? (
            <Loading />
         ) : (
            <>
               <Nav isMain={true} />
               <Visual />
               <Contents
                  data={data}
                  onPopUp={onPopUp}
                  menus={menus}
                  changeCategory={changeCategory}
                  onSearch={onSearch}
                  itemNumInPage={itemNumInPage}
                  setItemNumInPage={setItemNumInPage}
               />
               {isPopUp && <Popup popUpItem={popUpItem} setIsPopUp={setIsPopUp} onLike={onLike} />}
            </>
         )}
         {error && <Error />}
      </div>
   );
});

export default Home;
