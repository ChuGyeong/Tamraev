import React, { memo } from 'react';
import Nav from '../../components/Nav';
import { NoticeListContainer } from '../../styled/tamraevStyle';
import { useAxios } from '../../hooks/useAxios';

const NoticeList = memo(() => {
   const {
      data: noticeData,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/df4f59353713d0b3cdcfeb7ccb1e7478/raw/564a199cb321dd07add3f3054c607e5cf810d70e/noticeList.json',
   );

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
               <tbody>
                  {noticeData
                     .sort(function (a, b) {
                        if (a.id > b.id) {
                           return -1;
                        }
                        if (a.id < b.id) {
                           return 1;
                        }
                        return 0;
                     })
                     .map(item => (
                        <tr key={item.id}>
                           <td>{item.id}</td>
                           <td>{item.title}</td>
                           <td>{item.date}</td>
                           <td>{item.view}</td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </NoticeListContainer>
   );
});

export default NoticeList;
