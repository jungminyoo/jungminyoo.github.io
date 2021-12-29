import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
        &::-webkit-scrollbar{
            display: none;
        }
    }
`;

export default GlobalStyles;
