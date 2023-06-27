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
