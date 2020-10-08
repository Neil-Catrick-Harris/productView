import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        background-color: ${(props) => props.modalShowing ? "rgba(0,0,0,0.1)" : "white"}
    }

    #productView {
        display: grid;
        height: 50%;
        width: 75%;
        grid-template-areas:
            "imageGrid"
            "productDetails"
            "productSizes";
    }
    `;

export default GlobalStyle;
