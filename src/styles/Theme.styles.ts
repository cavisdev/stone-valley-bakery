import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "#522A27",
    black: "#140501",
    white: "#FFF8F5",
    link: "#15616D",
  },
  buttonStyles: `
            background-color: #522A27;
            color: #FFF8F5;
            border-radius: 2px;
            text-transform: uppercase;
            text-align: center;
            font-weight:  700;
            cursor: pointer;

            &:hover {
                opacity: 0.25;
            }
    `,
};

export { theme };
