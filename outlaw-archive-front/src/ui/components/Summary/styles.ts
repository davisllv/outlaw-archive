import { styled } from "@mui/material";

export const SummaryInfo = styled('div')(({ theme }) => ({
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
  }))