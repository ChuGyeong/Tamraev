import React, { memo } from 'react';
import ContentList from './ContentList';

const Contents = memo(({ data }) => {
   return (
      <div>
         <ContentList data={data} />
      </div>
   );
});

export default Contents;
