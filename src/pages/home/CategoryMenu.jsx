import React, { memo, useState } from 'react';
import { ContentMenu } from '../../styled/tamraevStyle';
import ContentSearch from './ContentSearch';
import { Link } from 'react-router-dom';

const CategoryMenu = memo(({ menus, changeCategory, onSearch }) => {
   const [isSearch, setIsSearch] = useState(false);

   return (
      <ContentMenu>
         <h3>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h3>
         <ul>
            {menus.map(item => (
               <li key={item.id} className={item.isChk ? 'on' : ''} onClick={() => changeCategory(item.id)}>
                  {item.kor}
               </li>
            ))}
            <li>
               <Link to={'/hyundaievList'}>전기차 목록</Link>
            </li>
            <li>
               <Link to={'/noticeList'}>제주 전기차 뉴스</Link>
            </li>
            <li>
               <button onClick={() => setIsSearch(!isSearch)}>
                  {isSearch ? <i className="xi-close"></i> : <i className="xi-search"></i>}
                  {isSearch ? '닫기' : '검색'}
               </button>
            </li>
         </ul>
         {<ContentSearch isSearch={isSearch} onSearch={onSearch} />}
      </ContentMenu>
   );
});

export default CategoryMenu;
