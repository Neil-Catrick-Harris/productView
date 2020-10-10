import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        background-color: ${(props) => props.modalShowing ? "rgba(0,0,0,0.1)" : "white"}
    }
    `;

export default GlobalStyle;
