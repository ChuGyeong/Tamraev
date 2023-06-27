import { styled } from 'styled-components';

//제목
export const Container = styled.div`
   width: ${props => props.width};
   margin: 30px auto;
   div {
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-50%);
      background-color: red;
      strong {
      }
      p {
      }
   }
`;
