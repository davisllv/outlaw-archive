import { styled, Switch } from "@mui/material";

export const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "100rem",
  margin: "2rem auto",
  padding: "1rem",

  borderRadius: "8px",

  background: theme.palette.grey[200],
}));

export const FooterContainer = styled("footer")(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",

  padding: "0 1rem",

  width: "100%",

  "@media (max-width: 790px)": {
    flexDirection: "column",
    alignItems: "stretch",
    gap: "1rem",
  },

  ".buttons-container": {
    display: "flex",
    gap: "0.5rem",

    button: {
      "@media (max-width: 790px)": {
        width: "100%",
      },
    },
  },
}));

export const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase": {
    color: "#f44336", // Cor do thumb quando "Morto" (false)
    "&.Mui-checked": {
      color: "#4caf50", // Cor do thumb quando "Vivo" (true)
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4caf50", // Cor do track quando "Vivo" (true)
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#f44336",
  },
  "& .MuiSwitch-thumb": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .MuiSvgIcon-root": {
      width: "2em",
      height: "2em",
    },
  },
}));
