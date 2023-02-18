import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, button {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    .ff-openSans {
        font-family: 'Open Sans', sans-serif;
    }

    // font-family: 'Open Sans', sans-serif;
    // font-family: 'Raleway', sans-serif;
`;

export default GlobalStyles;
