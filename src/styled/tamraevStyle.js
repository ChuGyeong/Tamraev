import { styled } from 'styled-components';

// visual
export const VisualContainer = styled.div`
   width: 1920px;
   overflow: hidden;
   img {
      width: 100%;
   }
`;

// ContentList
export const ContentListBox = styled.div`
   margin: auto;
   width: 1200px;
   ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 24px;
   }
`;

// ContentItem
export const ContentItemList = styled.li`
   overflow: hidden;
   width: 384px;
   height: 384px;
   img {
      width: 100%;
   }
`;

// Popup
export const PopupContainer = styled.div`
   .bg {
      position: fixed;
      background: rgba(0, 0, 0, 0.5);
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
   }
   .card {
      position: absolute;
      width: 1200px;
      height: 720px;
      background: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      .mediaArea {
         width: 720px;
      }
      .textArea {
         position: relative;
         width: 400px;
         background: #e4dcd3;
         padding: 60px 70px 70px;
         .close {
            position: absolute;
            right: 20px;
            top: 20px;
            display: block;
            width: 32px;
            height: 32px;
            background: transparent;
            border: none;
            font-size: 25px;
         }
         strong {
            color: #007fa8;
            font-weight: 700;
         }
         p {
            font-size: 30px;
            font-weight: 700;
            margin: 5px 0;
         }
         .likeBox {
            button {
               border-radius: 50%;
               width: 40px;
               height: 40px;
               line-height: 45px;
               border: none;
               background: #d4c1ac;
               padding: 0;
               i {
                  color: #fff;
                  font-size: 20px;
               }
               margin-right: 20px;
            }
         }
         .sns-share {
            position: absolute;
            left: 70px;
            bottom: 70px;
            span {
               position: absolute;
               left: 0;
               bottom: 20px;
            }
            .iconBox {
               border-top: 1px solid #c3bdb6;
               width: 400px;
               text-align: right;
               margin-top: 37px;
               padding-top: 20px;
               a {
                  display: inline-block;
                  margin: 0 4px;
               }
            }
         }
      }
   }
`;
