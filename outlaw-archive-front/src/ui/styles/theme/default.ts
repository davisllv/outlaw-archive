import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#4EA8DE", // --blue
      dark: "#1E6F9F", // --blue-dark
    },
    secondary: {
      main: "#8284FA", // --purple
      dark: "#5E60CE", // --purple-dark
    },
    grey: {
      700: "#0D0D0D", // --gray-700
      600: "#1A1A1A", // --gray-600
      500: "#262626", // --gray-500
      400: "#333333", // --gray-400
      300: "#808080", // --gray-300
      200: "#D9D9D9", // --gray-200
      100: "#F2F2F2", // --gray-100
    },
    error: {
      main: "#E25858", // --danger
    },
    background: {
      default: "#1A1A1A", // --gray-100 (ou outra cor de fundo desejada)
      paper: "#FFFFFF", // Cor do fundo dos componentes Paper
    },
    text: {
      primary: "#0D0D0D", //--gray-700, ou outra cor de texto desejada
      secondary: "#333333", //--gray-400, ou outra cor de texto secundaria
    },
  },
  // Você pode adicionar mais personalizações aqui, como tipografia, espaçamento, etc.
});
