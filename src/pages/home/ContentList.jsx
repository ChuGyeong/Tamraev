import React, { memo } from 'react';
import ContentItem from './ContentItem';
import { ContentListBox } from '../../styled/tamraevStyle';

const ContentList = memo(({ data, onPopUp }) => {
   console.log(data);
   return (
      <ContentListBox>
         <ul>
            {data.map(item => (
               <ContentItem key={item.id} item={item} onPopUp={onPopUp} />
            ))}
         </ul>
      </ContentListBox>
   );
});

export default ContentList;
