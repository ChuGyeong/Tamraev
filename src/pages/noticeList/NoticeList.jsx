import React, { memo, useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { NoticeListContainer } from '../../styled/tamraevStyle';
import { useAxios } from '../../hooks/useAxios';
import { Link } from 'react-router-dom';

const NoticeList = memo(() => {
   const {
      data: noticeData,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/df4f59353713d0b3cdcfeb7ccb1e7478/raw/218ab25456f60018edd12127b8999c56110e666e/noticeList.json',
   );
   const [data, setData] = useState(noticeData.sort((a, b) => b.id - a.id) || []);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10;
   const totalPages = Math.ceil(data.length / itemsPerPage);

   // 접속시 조회수 증가
   const updateView = id => {
      setData(data.map(item => (item.id === id ? { ...item, view: item.view + 1 } : item)));
   };

   useEffect(() => {
      setData(noticeData);
   }, [noticeData]);

   const handleClickFirst = () => {
      setCurrentPage(1);
   };

   const handleClickPrevious = () => {
      setCurrentPage(prevPage => prevPage - 1);
   };

   const handleClickNext = () => {
      setCurrentPage(prevPage => prevPage + 1);
   };

   const handleClickLast = () => {
      setCurrentPage(totalPages);
   };

   const renderTableData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentData = data.slice(startIndex, endIndex);

      return currentData.map(item => (
         <tr key={item.id}>
            <td>{item.id}</td>
            <td onClick={() => updateView(item.id)}>
               <Link to={`/noticeDetail/${item.id}`}>{item.title}</Link>
            </td>
            <td>{item.date}</td>
            <td>{item.view}</td>
         </tr>
      ));
   };

   const renderPageNumbers = () => {
      const pageNumbers = [];

      for (let i = 1; i <= totalPages; i++) {
         pageNumbers.push(
            <button key={i} onClick={() => setCurrentPage(i)} className={currentPage === i ? 'active' : ''}>
               {i}
            </button>,
         );
      }

      return pageNumbers;
   };

   return (
      <NoticeListContainer>
         <Nav />
         <div className="noticeBox">
            <h3>JEJU 전기차 관련 소식</h3>
            <p>제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
            <table>
               <colgroup>
                  <col className="wid1" />
                  <col className="wid2" />
                  <col className="wid3" />
                  <col className="wid4" />
               </colgroup>
               <thead>
                  <tr>
                     <th>NO</th>
                     <th>제목</th>
                     <th>작성일</th>
                     <th>조회수</th>
                  </tr>
               </thead>
               <tbody>{renderTableData()}</tbody>
            </table>
            <div className="pagination">
               <button onClick={handleClickFirst} disabled={currentPage === 1}>
                  <i className="xi-step-backward"></i>
               </button>
               <button onClick={handleClickPrevious} disabled={currentPage === 1}>
                  <i className="xi-angle-left"></i>
               </button>
               {renderPageNumbers()}
               <button onClick={handleClickNext} disabled={currentPage === totalPages}>
                  <i className="xi-angle-right"></i>
               </button>
               <button onClick={handleClickLast} disabled={currentPage === totalPages}>
                  <i className="xi-step-forward"></i>
               </button>
            </div>
         </div>
      </NoticeListContainer>
   );
});

export default NoticeList;
