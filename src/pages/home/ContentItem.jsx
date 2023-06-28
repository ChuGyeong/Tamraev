import React, { memo } from 'react';
import { ContentItemList } from '../../styled/tamraevStyle';

const ContentItem = memo(({ item, onPopUp }) => {
   const { imgUrl } = item;
   return (
      <ContentItemList onClick={() => onPopUp(item)}>
         <img src={imgUrl} alt="" />
      </ContentItemList>
   );
});

export default ContentItem;
