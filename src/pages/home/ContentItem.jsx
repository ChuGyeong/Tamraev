import React, { memo } from 'react';
import { ContentItemList } from '../../styled/tamraevStyle';

const ContentItem = memo(({ item }) => {
   const { imgUrl } = item;
   return (
      <ContentItemList>
         <img src={imgUrl} alt="" />
      </ContentItemList>
   );
});

export default ContentItem;
