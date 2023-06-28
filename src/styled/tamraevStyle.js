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
            width: 400px;
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
   width: 100vw;
   position: relative;
   top: 0;
   left: 0;
   z-index: 5;
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
