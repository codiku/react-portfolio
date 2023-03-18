import "@fontsource/inter"
import "@fontsource/poppins"

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { myTheme } from 'styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={myTheme}>
    <App />
  </ChakraProvider>
);
