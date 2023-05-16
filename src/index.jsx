import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "@/styles/theme.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={myTheme}>
    <App />
  </ChakraProvider>
);
