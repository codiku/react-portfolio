import { extendTheme } from '@chakra-ui/react'

const colors = {
    primary: {
        strong: '#FF7308',
        light: "#FFCD69"
    },
    secondary: '#0F1B61',
    grey: '#rgba(124, 124, 124, 0.76)',
    black: "#000000"
}

const fonts = {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
}

export const myTheme = extendTheme({ colors, fonts })