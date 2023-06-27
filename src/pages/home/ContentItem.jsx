import React, { memo } from 'react';

const ContentItem = memo(({ item }) => {
   const { imgUrl } = item;
   return (
      <li>
         <img src={imgUrl} alt="" />
      </li>
   );
});

export default ContentItem;
