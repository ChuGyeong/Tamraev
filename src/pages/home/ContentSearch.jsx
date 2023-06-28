import React from 'react';
import { ContentSearchBox } from '../../styled/tamraevStyle';

const ContentSearch = ({ isSearch }) => {
   return (
      <ContentSearchBox className={isSearch ? 'on' : ''}>
         <input type="text" placeholder="검색어를 입력해주세요." />
         <button>
            <i className="xi-search"></i>
         </button>
      </ContentSearchBox>
   );
};

export default ContentSearch;
