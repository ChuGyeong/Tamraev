import { styled } from 'styled-components';

// Visual
export const VisualContainer = styled.div`
   width: 100%;
   min-width: 1400px;
   overflow: hidden;
   margin: auto;
   height: 500px;

   .visual-swiper {
      .swiper-slide {
         overflow: hidden;
         position: relative;
         &.swiper-slide-active img {
            transform: scale(1);
            opacity: 1;
         }
         &.swiper-slide-next img,
         &.swiper-slide-prev img {
            transform: scale(1.2);
            opacity: 0;
         }
         .text-box {
            position: absolute;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
            color: #fff;
            z-index: 10;
            strong {
               font-size: 56px;
               font-weight: 600;
            }
            p {
               font-size: 21px;
               margin-top: 20px;
            }
         }
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 2.5s ease-in-out, opacity 0.5s ease-in-out;
         }
      }
      .swiper-pagination-bullet {
         width: 10px;
         height: 10px;
         background: #fff;
         opacity: 1;
         position: relative;
         margin-bottom: 20px;
         margin-right: 20px;
         &::after {
            content: '';
            display: block;
            width: 0;
            height: 0;
            background: transparent;
            border: 1px solid #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            transition: 0.5s;
         }
         &.swiper-pagination-bullet-active::after {
            width: 32px;
            height: 32px;
         }
      }
   }
`;

// CategoryMenu
export const ContentMenu = styled.div`
   width: 1200px;
   margin: auto;
   text-align: center;
   h3 {
      margin: 30px;
      font-size: 45px;
      font-weight: 700;
   }
   ul {
      border-top: 1px solid #e4dcd3;
      border-bottom: 1px solid #e4dcd3;
      padding-left: 30px;
      display: flex;
      box-sizing: border-box;
      li {
         height: 60px;
         line-height: 40px;
         margin: 0 15px;
         padding: 10px 0;
         cursor: pointer;
         text-align: center;
         font-weight: 600;
         color: #888;
         box-sizing: border-box;
         transition: 0.2s;
         a {
            color: #888;
         }
         &.on {
            color: #007fa8;
         }
         &:hover {
            border-bottom: 3px solid #007fa8;
         }
         &:last-child:hover {
            border: none;
         }
         button {
            width: 90px;
            height: 35px;
            border: none;
            background: #e4dcd3;
            border-radius: 20px;
            cursor: pointer;
            i {
               font-size: 20px;
               vertical-align: top;
               margin-right: 5px;
            }
         }
      }
   }
`;

// ContentSearch
export const ContentSearchBox = styled.form`
   height: 0;
   line-height: 150px;
   background: #e4dcd3;
   margin-bottom: 50px;
   transition: 0.4s;
   overflow: hidden;
   input {
      width: 640px;
      height: 60px;
      padding: 0;
      border: none;
      outline: none;
      text-indent: 20px;
   }
   button {
      cursor: pointer;
      background: #007fa8;
      border: none;
      height: 60px;
      vertical-align: middle;
      i {
         color: #fff;
         font-size: 20px;
         width: 40px;
      }
   }
   &.on {
      height: 160px;
   }
`;

// ContentList
export const ContentListBox = styled.div`
   margin: auto;
   width: 1200px;
   ul {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
   }
   .view-more-btn {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      button {
         background: transparent;
         border: none;
         cursor: pointer;
         i {
            display: block;
            font-size: 40px;
         }
         span {
            font-size: 16px;
         }
      }
   }
`;

// ContentItem
export const ContentItemList = styled.li`
   overflow: hidden;
   width: 384px;
   height: 384px;
   img {
      width: 100%;
      cursor: pointer;
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
      z-index: 100;
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
      z-index: 150;
      .mediaArea {
         width: 720px;
         .videoBox {
            height: 720px;
            display: flex;
            align-items: center;
            background: #000;
         }
         .slideBox {
            height: 720px;
         }
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
            cursor: pointer;
         }
         strong {
            color: #007fa8;
            font-weight: 700;
         }
         p {
            font-size: 35px;
            line-height: 1.3;
            margin: 10px 0;
            font-weight: 700;
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
               cursor: pointer;
               margin-right: 20px;
               i {
                  color: #fff;
                  font-size: 20px;
               }
            }
         }
         .sns-share {
            width: 350px;
            position: absolute;
            left: 70px;
            bottom: 70px;
            .tagBox {
               line-height: 2;
               em {
                  margin-right: 10px;
               }
            }
            span {
               position: absolute;
               left: 0;
               bottom: 20px;
            }
            .iconBox {
               border-top: 1px solid #c3bdb6;
               width: 350px;
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

// Footer
export const FooterContainer = styled.div`
   width: 100%;
   padding: 60px 0;
   background: #303030;
   text-align: center;
   margin-top: 100px;
   img {
   }
   ul {
      margin-top: 36px;
      display: flex;
      justify-content: center;
      position: relative;
      &::after {
         content: '';
         height: 1px;
         width: 100%;
         background: #989898;
         position: absolute;
         top: 50%;
      }
      li {
         padding: 0 20px;
         position: relative;
         background: #303030;
         z-index: 1;
         a {
            font-size: 18px;
            color: #fff;
            opacity: 0.5;
         }
         &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 3px;
            background: #989898;
         }
         &:first-child::after {
            display: none;
         }
      }
   }
   span {
      display: block;
      color: #707070;
      font-size: 14px;
      margin-top: 40px;
   }
`;

//nav
export const NavContainer = styled.div`
   box-sizing: border-box;
   width: 100%;
   position: relative;
   top: 0;
   left: 0;
   z-index: 5;
   .bg {
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      &.on {
         display: block;
      }
   }
   i {
      position: absolute;
      top: 50px;
      left: calc(50% + 550px);
      transform: translateY(-50%);
      z-index: 10;
      .hamburger {
         cursor: pointer;
         &:hover .line:nth-child(1) {
            -webkit-transform: translateY(10px);
            -ms-transform: translateY(10px);
            -o-transform: translateY(10px);
            transform: translateY(10px);
         }

         &:hover .line:nth-child(3) {
            -webkit-transform: translateY(-10px);
            -ms-transform: translateY(-10px);
            -o-transform: translateY(-10px);
            transform: translateY(-10px);
         }
         &.is-active {
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            -webkit-transition-delay: 0.6s;
            -o-transition-delay: 0.6s;
            transition-delay: 0.6s;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            .line {
               background: #000;
            }
            .line:nth-child(1),
            .line:nth-child(3) {
               -webkit-transition-delay: 0.3s;
               -o-transition-delay: 0.3s;
               transition-delay: 0.3s;
            }
            .line:nth-child(1) {
               -webkit-transform: translateY(9px);
               -ms-transform: translateY(9px);
               -o-transform: translateY(9px);
               transform: translateY(9px);
            }
            .line:nth-child(2) {
               width: 0;
            }
            .line:nth-child(3) {
               -webkit-transform: translateY(-9px) rotate(90deg);
               -ms-transform: translateY(-9px) rotate(90deg);
               -o-transform: translateY(-9px) rotate(90deg);
               transform: translateY(-9px) rotate(90deg);
            }
         }

         .line {
            width: 30px;
            height: 3px;
            background-color: ${props => props.line_color};
            display: block;
            margin-bottom: 6px;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            &:last-child {
               margin-bottom: 0;
            }
         }
      }
   }
   .gnb {
      background: transparent;
      padding: 34px 0;
      width: 1200px;
      position: relative;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      margin-bottom: ${props => props.nav_bottom_margin};
   }
   .scrollNav {
      width: 100%;
      height: 700px;
      transition: 0.3s;
      display: flex;
      position: absolute;
      left: 0;
      top: -700px;
      .img-box {
         width: 50%;
         height: 100%;
         position: relative;
         li {
            position: absolute;
            width: 100%;
            height: 100%;
            img {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }
         }
      }
      .list-box {
         background: #fff;
         width: 50%;
         height: 100%;
         padding: 87px 0 0 140px;
         box-sizing: border-box;
         ul {
            li {
               width: 460px;
               padding: 40px 0 38px;
               border-top: 1px solid #e5e5e5;
               &:first-child {
                  border-top: none;
               }
               a {
                  font-size: 40px;
                  padding-left: 20px px;
                  position: relative;
                  &::after {
                     content: '';
                     opacity: 0;
                     position: absolute;
                     left: -20px;
                     top: 30px;
                     display: block;
                     width: 10px;
                     height: 10px;
                     border-radius: 50%;
                     background: #007fa8;
                     transition: 0.5s ease-out;
                  }
                  &:hover,
                  &.on {
                     font-weight: 600;
                     &::after {
                        opacity: 1;
                        top: 10px;
                     }
                  }
               }
            }
         }
      }
      &.on {
         top: 0;
      }
   }
`;

// NoticeList
export const NoticeListContainer = styled.div`
   .noticeBox {
      width: 1200px;
      text-align: center;
      margin: auto;
      h3 {
         font-size: 40px;
         font-weight: 700;
      }
      p {
         color: #666;
         font-size: 18px;
         margin-bottom: 50px;
      }
      table {
         font-size: 18px;
         width: 100%;
         .wid1 {
            width: 13%;
         }
         .wid2 {
            width: auto;
         }
         .wid3 {
            width: 13%;
         }
         .wid4 {
            width: 13%;
         }
         tr th {
            height: 46px;
            line-height: 46px;
            border-bottom: 1px solid #000;
            border-top: 1px solid #000;
            font-weight: 900;
         }
         tr td {
            border-top: 1px solid #d8d5d5;
            text-align: center;
            height: 99px;
            line-height: 99px;
            &:nth-child(2) {
               text-align: left;
               letter-spacing: -2px;
               font-weight: 900;
               cursor: pointer;
            }
         }
      }
   }
`;

// NoticeDetail
export const NoticeDetailBox = styled.div`
   .noticeBox {
      width: 1200px;
      text-align: center;
      margin: auto;
      h3 {
         font-size: 40px;
         font-weight: 700;
      }
      p {
         color: #666;
         font-size: 18px;
         margin-bottom: 50px;
      }
      .noticeView {
         border-top: 1px solid #000;
         .textBox {
            margin-bottom: 50px;
            h4 {
               font-size: 28px;
               line-height: 1;
               margin-bottom: 13px;
               font-weight: 500;
               margin-top: 30px;
            }
            span {
               font-size: 15px;
               color: #666;
               display: block;
               border-bottom: 1px solid #d8d5d5;
               padding-bottom: 30px;
            }
         }
      }
      .contentBox {
         text-align: left;
         margin: 50px 0;
         border-bottom: 1px solid #000;
         padding-bottom: 50px;
      }
      .paging {
         position: relative;
         button {
            border: none;
            font-size: 18px;
            height: 55px;
            cursor: pointer;
            &.list {
               padding: 0 70px;
               color: #fff;
               background: #002c5f;
               a {
                  width: 100%;
                  height: 100%;
                  color: #fff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
               }
            }
            &.btn {
               position: absolute;
               top: 0;
               background: transparent;
               &.prev {
                  left: 0;
               }
               &.next {
                  right: 0;
               }
            }
         }
      }
   }
`;
//infoContainer
export const InfoContainer = styled.div`
   margin-bottom: -100px;
   .inner {
      height: 1607px;
      position: relative;
      .bg {
         width: 100%;
         height: 1056px;
         background: #f6f3f2;
         display: block;
         position: absolute;
         bottom: 0;
         z-index: 1;
      }
      img {
         display: block;
         position: absolute;
         left: 50%;
         top: 0;
         transform: translateX(-50%);
         z-index: 1;
      }
   }
`;
// HyundaievList
export const HyundaievContainer = styled.div`
   .hyundaievBox {
      width: 1000px;
      text-align: center;
      margin: auto;
      h3 {
         font-size: 40px;
         font-weight: 700;
      }
      h3 + p {
         color: #666;
         font-size: 18px;
         margin-bottom: 50px;
      }
      ul {
         text-align: left;
      }
   }
`;
// HyundaievList
export const HyundaievBox = styled.li`
   display: flex;
   border-bottom: 1px solid #efefef;
   padding: 30px;
   box-sizing: border-box;
   position: relative;
   &:last-child {
      border-bottom: none;
   }
   .textBox {
      h4 {
         font-size: 22px;
         font-weight: 600;
      }
      span {
         font-size: 13px;
         display: block;
         margin-bottom: 20px;
         color: #999;
      }
      p {
         font-size: 14px;
      }
   }
   .moreBox {
      position: absolute;
      right: 50px;
      top: 50%;
      button {
         border: none;
         background: transparent;
         color: #999;
         cursor: pointer;
         i {
            font-size: 40px;
            transition: 0.4s;
            margin-bottom: 10px;
         }
         &:hover i {
            color: #002c5f;
         }
      }
   }
`;

export const HyundaievDetailContent = styled.div`
   .hyundaievDetailBox {
      width: 1000px;
      margin: 50px auto;
      h3 {
         font-size: 40px;
         font-weight: 900;
         margin-bottom: 50px;
         text-align: center;
      }
      img {
         display: block;
         margin: auto;
         width: 300px;
      }
      p {
         margin: 30px 0 10px 20px;
         font-size: 20px;
         font-weight: 600;
         position: relative;
         &::after {
            display: block;
            content: '';
            width: 2px;
            height: 15px;
            background: #002c5f;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -15px;
         }
      }
      table {
         width: 100%;
         text-indent: 10px;
         margin-bottom: 50px;
         .wid1 {
            width: 200px;
         }
         tr {
            &:nth-child(odd) {
               background: #efefef;
            }
            th {
               font-weight: 600;
               text-align: left;
            }
            td {
               padding: 10px;
               box-sizing: border-box;
               .star-container {
                  margin-left: -5px;
               }
            }
         }
      }
      .paging {
         position: relative;
         button {
            border: none;
            font-size: 18px;
            height: 55px;
            cursor: pointer;
            &.list {
               padding: 0 70px;
               color: #fff;
               background: #002c5f;
               display: block;
               margin: auto;
               a {
                  width: 100%;
                  height: 100%;
                  color: #fff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
               }
            }
            &.btn {
               position: absolute;
               top: 0;
               background: transparent;
               &.prev {
                  left: 0;
               }
               &.next {
                  right: 0;
               }
            }
         }
      }
   }
`;
