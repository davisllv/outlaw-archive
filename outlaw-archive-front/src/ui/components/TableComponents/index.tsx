import { forwardRef } from "react";
import { TableComponents } from "react-virtuoso";
import { IOutlawInformations } from "../../../data/types/interfaces/GeneralInterfaces";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const VirtuosoTableComponents: TableComponents<IOutlawInformations> = {
  Scroller: forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer
      component={Paper}
      {...props}
      ref={ref}
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#333333",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#4EA8DE",
          borderRadius: "4px",
        },
      }}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
        backgroundColor: "#262626",
      }}
    />
  ),
  TableHead: forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};
