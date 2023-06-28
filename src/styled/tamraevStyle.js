import { styled } from 'styled-components';

// Visual
export const VisualContainer = styled.div`
   width: 100%;
   min-width: 1400px;
   overflow: hidden;
   margin: auto;
   .text-box {
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
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
         z-index: 10;
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
   width: 100vw;
   position: absolute;
   top: 0;
   left: 0;
   /* background: transparent; */
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
   .gnb {
      background: red;
      padding: 34px 0;
      width: 1200px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      i {
         position: absolute;
         top: 50%;
         right: 30px;
         transform: translateY(-50%);
         z-index: 500;
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
               background-color: #002c5f;
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
   }
   .scrollNav {
      width: 100%;
      height: 700px;
      transition: 0.3s;
      overflow: hidden;
      display: flex;
      position: absolute;
      left: 0;
      top: -700px;
      background: green;
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
               a {
                  font-size: 40px;
                  padding-left: 20px px;
                  position: relative;
               }
            }
         }
      }
      &.on {
         top: 0;
      }
   }
`;
