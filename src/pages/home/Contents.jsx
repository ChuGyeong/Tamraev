import React, { memo } from 'react';
import ContentList from './ContentList';

const Contents = memo(({ data, onPopUp }) => {
   return (
      <div>
         <ContentList data={data} onPopUp={onPopUp} />
      </div>
   );
});

export default Contents;
