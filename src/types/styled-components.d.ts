import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: string;
      blue: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}
