import React, { memo } from 'react';
import { useAxios } from '../../hooks/useAxios';
import Contents from './Contents';

const Home = memo(() => {
   const { data, loading, error } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/710c08b6a0967c9bb97c83e4e588604f/raw/04a3577fde858747774ab68699323323182fb193/tamraev.json',
   );
   return (
      <div>
         <Contents data={data} />
      </div>
   );
});

export default Home;
