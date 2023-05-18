import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    dark: "#FF7308",
    light: "#FFCD69",
  },
  secondary: "#0F1B61",
  black: "#000000",

  React: "#FF7308",
  Redux: "black",
  Typescript: "#0F1B61",
  "Node.JS": "#000000bc",
  ES6: "#fea154",
  HTML: "#E72F09",
  CSS: "#3878F4",
  Bootstrap: "#9038f4",
  Firebase: "#feba54",
  Vercel: "grey",
  ChakraUI: "#31b03e",
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};
export const myTheme = extendTheme({ colors, fonts });
