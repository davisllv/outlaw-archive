import { styled, TableContainer } from "@mui/material";

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.grey[400],
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.background.paper,
          borderRadius: "4px",
        },
  }))