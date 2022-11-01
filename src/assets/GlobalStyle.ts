import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Inter', sans-serif;
  }

  ol, ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
