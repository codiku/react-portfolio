import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#FF7308",
    light: "#FFCD69",
  },
  secondary: "#0F1B61",
  black: "#000000",
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};
export const myTheme = extendTheme({ colors, fonts });
