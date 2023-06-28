import React, { useRef, useState } from 'react';
import { ContentSearchBox } from '../../styled/tamraevStyle';

const ContentSearch = ({ isSearch, onSearch }) => {
   const [searchText, setSearchText] = useState('');
   const textBoxRef = useRef(null);
   const onTyping = e => {
      setSearchText(e.target.value);
   };
   const onSub = e => {
      e.preventDefault();
      onSearch(searchText);
      setSearchText('');
      textBoxRef.current.focus();
   };
   return (
      <ContentSearchBox className={isSearch ? 'on' : ''} onSubmit={onSub}>
         <input
            type="text"
            placeholder="검색어를 입력해주세요."
            value={searchText}
            onChange={onTyping}
            ref={textBoxRef}
         />
         <button>
            <i className="xi-search"></i>
         </button>
      </ContentSearchBox>
   );
};

export default ContentSearch;
