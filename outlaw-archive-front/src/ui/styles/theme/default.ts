import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Rye', serif",
  },
  palette: {
    primary: {
      main: "#8B5A2B", // Tom de couro envelhecido (marrom clássico)
      dark: "#5A3E1B", // Marrom escuro, parecido com madeira antiga
    },
    secondary: {
      main: "#D2691E", // Tom de ferrugem (inspirado em poeira e desertos)
      dark: "#A0522D", // Marrom avermelhado, lembrando ferro oxidado
    },
    grey: {
      700: "#2C1D0C", // Marrom bem escuro, quase preto
      600: "#3B2F2F", // Cinza amadeirado
      500: "#645452", // Cinza com tom terroso
      400: "#8C7853", // Bege envelhecido, lembra papel antigo
      300: "#C0A080", // Bege claro, remetendo ao sol batendo na areia
      200: "#D2B48C", // Tom de couro desgastado
      100: "#F5DEB3", // Bege claro, cor de palha
    },
    error: {
      main: "#B22222", // Vermelho sangue, algo como cartazes de "WANTED"
      light: "#8B0000", // Vermelho escuro, mais sombrio
    },
    background: {
      default: "#F5F5DC", // Bege claro, como pergaminho ou papel envelhecido
      paper: "#E3CDA4", // Papel envelhecido amarelado, bem rústico
    },
    text: {
      primary: "#faf0e6", // Marrom escuro, para boa leitura
      secondary: "#2C1D0C", // Tom amadeirado para textos secundários
    },
    success: {
      main: "#556B2F", // Verde musgo, remetendo a natureza e caça
    },
  },
});
