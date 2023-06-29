import React, { memo } from 'react';
import CenteredImg from '../../components/CenteredImg';
import Nav from '../../components/Nav';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import Loading from '../../components/Loading';
import { DetailImgContainer } from '../../styled/tamraevStyle';
import { Link } from 'react-router-dom';

const HyundaievImg = memo(() => {
   const {
      data: hyundaievData,
      loading,
      error,
   } = useAxios(
      'https://gist.githubusercontent.com/ChuGyeong/f85da4ae61e13fb8046ccc0d30ac926c/raw/cb13fb05af04c422936ccf5875a9320442e70e01/hyundaiev.json',
   );
   const { hyundaievImgID } = useParams();

   return !loading && hyundaievData ? (
      <Loading />
   ) : (
      <DetailImgContainer>
         <Nav />
         <div className="detailImgBox">
            {hyundaievData
               .filter(item => item.id === Number(hyundaievImgID))
               .map(item => (
                  <div key={item.id}>
                     <div className="exteriorBox contentBox">
                        <h3>
                           익스테리어<span>{item.photo.exterior.length}</span>
                        </h3>
                        <CenteredImg item={item.photo.exterior} />
                     </div>
                     <div className="interiorBox contentBox">
                        <h3>
                           인테리어<span>{item.photo.interior.length}</span>
                        </h3>
                        <CenteredImg item={item.photo.interior} />
                     </div>
                     {item.photo.color.length > 0 && (
                        <div className="colorBox contentBox">
                           <h3>
                              컬러<span>{item.photo.color.length}</span>
                           </h3>
                           <CenteredImg item={item.photo.color} />
                        </div>
                     )}
                  </div>
               ))}
            <button className="list">
               <Link to={`/hyundaievList`}>목록보기</Link>
            </button>
         </div>
      </DetailImgContainer>
   );
});

export default HyundaievImg;
