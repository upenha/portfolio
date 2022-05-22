import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1F1F1F;
    animation: transition 1s ease-out;
    background-image: url('/svg/waves.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    
    background-position: bottom;
    width: 100vw;
    height: 100vh;
    @keyframes transition {
      0% {
        background-color: #171717;
      }
      100% {
        background-color: #1F1F1F;
      }
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
    ::selection {
      background: #AD94E9;
      color: #f4f4f4;
    }
  }
`;
 
export default GlobalStyle;