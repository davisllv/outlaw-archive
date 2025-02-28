import { forwardRef } from "react";
import { TableComponents } from "react-virtuoso";
import { IOutlawInformations } from "../../../data/types/interfaces/GeneralInterfaces";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableContainerStyled } from "./styles";

export const VirtuosoTableComponents: TableComponents<IOutlawInformations> = {

  Scroller: forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainerStyled
      {...props}
      ref={ref}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
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
