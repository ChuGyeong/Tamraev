import React, { memo } from 'react';
import ContentItem from './ContentItem';
import { ContentListBox } from '../../styled/tamraevStyle';

const ContentList = memo(({ data, onPopUp, itemNumInPage, setItemNumInPage }) => {
   // 최대 더보기 개수 증가
   const moreShow = () => {
      setItemNumInPage((itemNumInPage += 6));
   };
   return (
      <ContentListBox>
         <ul>
            {data.map(
               (item, idx) => idx < itemNumInPage && <ContentItem key={item.id} item={item} onPopUp={onPopUp} />,
            )}
         </ul>
         {data.length > itemNumInPage && (
            <div className="view-more-btn">
               <button onClick={moreShow}>
                  <i className="xi-plus"></i>
                  <span>더보기</span>
               </button>
            </div>
         )}
      </ContentListBox>
   );
});

export default ContentList;
