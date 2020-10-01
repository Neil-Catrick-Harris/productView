import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
    }
    
    #app {
        height: 75%;
        width: 100%;
    }
    
    .moduleDisplay {
        height: 75%;
        width: 75%;
    }`;

export default GlobalStyle;