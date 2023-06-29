import React, { memo, useEffect } from 'react';
import { PopupContainer } from '../../styled/tamraevStyle';
import PopUpVideo from './PopUpVideo';
import SlideImg from '../../components/SlideImg';
import SpriteAnimation from '../../components/SpriteAnimation';

const Popup = memo(({ popUpItem, setIsPopUp, onLike, data }) => {
   const { id, title, tag, categories, like, imgUrl, videoUrl, slideimgUrl } = popUpItem;
   return (
      <PopupContainer>
         <div className="bg" onClick={() => setIsPopUp(false)}></div>
         <div className="card">
            <div className="mediaArea">
               {videoUrl !== '' ? <PopUpVideo videoUrl={videoUrl} /> : <SlideImg slideimgUrl={slideimgUrl} />}
            </div>
            <div className="textArea">
               <button className="close" onClick={() => setIsPopUp(false)}>
                  <i className="xi-close"></i>
               </button>
               <strong>
                  {categories === 'PopularContent'
                     ? '인기 콘텐츠'
                     : categories === 'IntroductionToElectricVehicles'
                     ? '전기차 소개'
                     : categories === 'smartElectricCarTrip'
                     ? '슬기로운 전기차 여행'
                     : categories === 'ChargingAndTroubleshooting'
                     ? '충전 및 문제 대처법'
                     : 'FAQ'}
               </strong>
               <p>
                  {title.split('\\n').map((line, idx) => {
                     return (
                        <span key={idx}>
                           {line}
                           <br />
                        </span>
                     );
                  })}
               </p>
               <div className="likeBox">
                  <button onClick={() => onLike(id)}>
                     <SpriteAnimation
                        url={'images/home/icon_heart_68x76.png'}
                        imgW={2244}
                        spriteW={68}
                        animationSpeed={30}
                     />
                  </button>
                  <span>{like}</span>
               </div>
               <div className="sns-share">
                  <div className="tagBox">
                     {tag.map((item, idx) => (
                        <em key={idx}>#{item}</em>
                     ))}
                  </div>
                  <div className="btnBox">
                     <div className="iconBox">
                        <span>
                           <i className="xi-share-alt"></i> 공유하기
                        </span>
                        <a>
                           <img src="./images/icon/icon_blog.png" alt="" />
                        </a>
                        <a>
                           <img src="./images/icon/icon_kakao.png" alt="" />
                        </a>
                        <a>
                           <img src="./images/icon/icon_facebook.png" alt="" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </PopupContainer>
   );
});

export default Popup;
