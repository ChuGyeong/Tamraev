import React, { memo, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import Contents from './Contents';
import Popup from './Popup';
// import Visual from './pages/home/Visual';

const Home = memo(() => {
   const { data, loading, error } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/710c08b6a0967c9bb97c83e4e588604f/raw/04a3577fde858747774ab68699323323182fb193/tamraev.json',
   );
   const [isPopUp, setIsPopUp] = useState(true);
   const onItemclick = () => {};

   return (
      <div>
         {/* <Visual /> */}
         <Contents data={data} />
         {isPopUp && <Popup />}
      </div>
   );
});

export default Home;
