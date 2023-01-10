import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            main: string;
            black: string;
            white: string;
            link: string;
        },
        buttonStyles: string;
    }
}