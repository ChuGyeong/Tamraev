import React, { memo, useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import Contents from './Contents';
import Popup from './Popup';
import Visual from './Visual';
import Nav from '../../components/Nav';

const Home = memo(() => {
   const {
      data: dataList,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/710c08b6a0967c9bb97c83e4e588604f/raw/12780e33b46e459942d09db7faaa58e3e5631758/tamraev.json',
   );
   const [data, setData] = useState(dataList || []);

   useEffect(() => {
      if (dataList) {
         setData(dataList);
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
      console.log(data[0].like);
   };

   return (
      <div>
         {!loading && data ? (
            <div>Loading...</div>
         ) : (
            <>
               <Nav isMain={true} />
               <Visual />
               <Contents data={data} onPopUp={onPopUp} />
               <Footer />
               {isPopUp && <Popup popUpItem={popUpItem} setIsPopUp={setIsPopUp} onLike={onLike} />}
            </>
         )}{' '}
      </div>
   );
});

export default Home;
