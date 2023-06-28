import React, { memo } from 'react';
import ContentList from './ContentList';
import CategoryMenu from './CategoryMenu';

const Contents = memo(({ data, onPopUp, menus, changeCategory, onSearch, itemNumInPage, setItemNumInPage }) => {
   return (
      <div>
         <CategoryMenu menus={menus} changeCategory={changeCategory} onSearch={onSearch} />
         <ContentList data={data} onPopUp={onPopUp} itemNumInPage={itemNumInPage} setItemNumInPage={setItemNumInPage} />
      </div>
   );
});

export default Contents;
