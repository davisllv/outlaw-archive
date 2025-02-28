import { GlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function DefaultGlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        body: {
          background: theme.palette.background.default,
        },
        "body, input, textarea, button": {
          fontFamily: "Rye, sans-serif",
          fontWeight: 400,
          lineHeight: 1.3,
          fontSize: "1rem",
          WebkitFontSmoothing: "antialiased",
        },
      }}
    />
  );
}
