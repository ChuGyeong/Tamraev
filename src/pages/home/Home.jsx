import React, { memo, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import Contents from './Contents';
import Popup from './Popup';
import Visual from './Visual';
import Footer from '../../components/Footer';

const Home = memo(() => {
   const { data, loading, error } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/710c08b6a0967c9bb97c83e4e588604f/raw/75d027779930599c264d2172d36ebf158e3b9253/tamraev.json',
   );
   const [isPopUp, setIsPopUp] = useState(false);
   const [popUpItem, setPopUpItem] = useState({});

   const onPopUp = item => {
      setIsPopUp(true);
      setPopUpItem(item);
      console.log(popUpItem);
   };

   return (
      <div>
         <Visual />
         <Contents data={data} onPopUp={onPopUp} />
         <Footer />
         {isPopUp && <Popup popUpItem={popUpItem} setIsPopUp={setIsPopUp} />}
      </div>
   );
});

export default Home;
