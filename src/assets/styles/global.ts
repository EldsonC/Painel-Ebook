import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }

    body, html {
        font-family: "Inter", sans-serif !important;
        overflow-x: hidden;

        background: "#F5F6FB";
    }
`;