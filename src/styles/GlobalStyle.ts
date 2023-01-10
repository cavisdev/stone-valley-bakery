import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Khula", sans-serif;
    color: ${({ theme }) => theme.colors.main};
    background-color: ${({ theme }) => theme.colors.white};
}
`;
