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
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .page-enter {
        opacity: 0;
        transform: scale(1.1);
    }

    .page-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
    }

    .page-exit {
        opacity: 1;
        transform: scale(1);
    }

    .page-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
    }
`;

export default GlobalStyles;
