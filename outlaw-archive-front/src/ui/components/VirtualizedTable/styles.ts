import { styled, TableCell } from "@mui/material";

export const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  color: theme.palette.text.primary,
  fontWeight: "bold",
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
}));

export const StyledContentCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[500],
  fontWeight: "bold",
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));
