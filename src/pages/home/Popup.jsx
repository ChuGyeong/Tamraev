import React, { memo } from 'react';
import { PopupContainer } from '../../styled/tamraevStyle';
import { AiFillHeart } from 'react-icons/ai';
import PopUpVideo from './PopUpVideo';
import PopUpSlide from './PopUpSlide';

const Popup = memo(({ popUpItem, setIsPopUp }) => {
   const { id, title, tag, like, imgUrl, videoUrl, slideImgUrl } = popUpItem;
   return (
      <PopupContainer>
         <div className="bg" onClick={() => setIsPopUp(false)}></div>
         <div className="card">
            <div className="mediaArea">{videoUrl !== '' ? <PopUpVideo videoUrl={videoUrl} /> : <PopUpSlide />}</div>
            <div className="textArea">
               <button className="close" onClick={() => setIsPopUp(false)}>
                  <i className="xi-close"></i>
               </button>
               <strong>카테고리</strong>
               <p>
                  {title.split('\\n').map(line => {
                     return (
                        <>
                           {line}
                           <br />
                        </>
                     );
                  })}
               </p>
               <div className="likeBox">
                  <button>
                     <i>
                        <AiFillHeart />
                     </i>
                  </button>
                  <span>{like}</span>
               </div>
               <div className="sns-share">
                  <div className="tagBox">
                     {tag.map(item => (
                        <em>#{item}</em>
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
