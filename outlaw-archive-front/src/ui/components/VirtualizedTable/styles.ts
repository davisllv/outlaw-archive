import { styled, TableCell } from "@mui/material";

export const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  color: theme.palette.text.secondary,
  fontWeight: "bold",
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
}));

export const StyledContentCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: "cursive",
  backgroundColor: theme.palette.grey[500],
  fontWeight: "bold",
  borderBottom: `1px solid ${theme.palette.grey[300]}`,

  overflow: "hidden",
  textOverflow: "ellipsis",
}));
