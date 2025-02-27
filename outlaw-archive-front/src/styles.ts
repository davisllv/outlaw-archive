import { styled } from "@mui/material";

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

export const FooterContainer = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",

  padding: "0 1rem",

  width: "100%",

  ".info-container": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    div: {
      display: "flex",
      gap: "0.25rem",
      alignItems: "center",
    },

    ".captured": {
      color: theme.palette.success.main,
      fontWeight: "bold",
    },

    ".wanted": {
      color: theme.palette.error.light,
      fontWeight: "bold",
    },
  },

  ".buttons-container": {
    display: "flex",
    gap: "0.5rem",
  },
}));
