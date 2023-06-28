import React, { memo, useState } from 'react';
import { NoticeDetailBox } from '../../styled/tamraevStyle';
import Nav from '../../components/Nav';
import { useAxios } from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import SlideImg from '../../components/SlideImg';
import { Link } from 'react-router-dom';

const NoticeDetail = memo(() => {
   const {
      data: noticeData,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/df4f59353713d0b3cdcfeb7ccb1e7478/raw/564a199cb321dd07add3f3054c607e5cf810d70e/noticeList.json',
   );

   const { noticeID } = useParams();

   return (
      <NoticeDetailBox>
         <Nav />
         <div className="noticeBox">
            <h3>JEJU 전기차 관련 소식</h3>
            <p>제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
            {noticeData
               .filter(item => item.id === Number(noticeID))
               .map(item => (
                  <div className="noticeView" key={item.id}>
                     <div className="textBox">
                        <h4>{item.title}</h4>
                        <span>{item.date}</span>
                     </div>
                     {item.img.length < 2 ? (
                        <img src={item.img} alt="" style={{ width: '100%' }} />
                     ) : (
                        <SlideImg slideimgUrl={item.img} />
                     )}
                     <div className="contentBox">
                        {item.content.split('\\n').map((line, idx) => {
                           return (
                              <span key={idx}>
                                 {line}
                                 <br />
                              </span>
                           );
                        })}
                     </div>
                  </div>
               ))}
            <div className="paging">
               {noticeID > 1 && (
                  <button className="btn prev">
                     <Link to={`/noticeDetail/${noticeID - 1}`}>
                        <i className="xi-angle-left"></i>이전글
                     </Link>
                  </button>
               )}

               <button className="list">
                  <Link to={`/noticeList`}>목록보기</Link>
               </button>

               {noticeID < noticeData.length && (
                  <button className="btn next">
                     <Link to={`/noticeDetail/${Number(noticeID) + 1}`}>
                        다음글<i className="xi-angle-right"></i>
                     </Link>
                  </button>
               )}
            </div>
         </div>
      </NoticeDetailBox>
   );
});

export default NoticeDetail;
