import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #app {
        height: 100%;

    }

    body, button {
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
    }





`;
