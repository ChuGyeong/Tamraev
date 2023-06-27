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
   width: 1200px;
   box-sizing: border-box;
   position: fixed;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   /* background: transparent; */
   background: white;
   z-index: 100;
   padding: 34px 0;
   i {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
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
`;
