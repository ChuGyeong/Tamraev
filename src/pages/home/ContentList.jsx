import React, { memo } from 'react';
import ContentItem from './ContentItem';

const ContentList = memo(({ data }) => {
   return (
      <ul>
         {data.map(item => (
            <ContentItem key={item.id} item={item} />
         ))}
      </ul>
   );
});

export default ContentList;
