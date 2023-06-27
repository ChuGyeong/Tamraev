import React, { memo } from 'react';
import { PopupContainer } from '../../styled/tamraevStyle';
import { AiFillHeart } from 'react-icons/ai';

const Popup = memo(() => {
   return (
      <PopupContainer>
         <div className="bg"></div>
         <div className="card">
            <div className="mediaArea"></div>
            <div className="textArea">
               <button className="close">
                  <i className="xi-close"></i>
               </button>
               <strong>카테고리</strong>
               <p>타이틀</p>
               <div className="likeBox">
                  <button>
                     <i>
                        <AiFillHeart />
                     </i>
                  </button>
                  <span>숫자</span>
               </div>
               <div className="sns-share">
                  <div className="tagBox">태그영역</div>
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
