import React, { memo } from 'react';
import ContentList from './ContentList';
import CategoryMenu from './CategoryMenu';

const Contents = memo(({ data, onPopUp }) => {
   return (
      <div>
         <CategoryMenu />
         <ContentList data={data} onPopUp={onPopUp} />
      </div>
   );
});

export default Contents;
