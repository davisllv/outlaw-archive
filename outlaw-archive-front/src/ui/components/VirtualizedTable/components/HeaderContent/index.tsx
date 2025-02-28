import { Checkbox, TableRow } from "@mui/material";
import { StyledHeaderCell } from "../../styles";
import { useContext } from "react";
import { OutlawArchiveContext } from "../../../../../data/contexts/OutlawArchive/OutlawArchiveContext";
import { IColumnData } from "../../../../../data/types/interfaces/GeneralInterfaces";

interface IHeaderContentProps {
  columns: IColumnData[];
}

export function HeaderContent({ columns }: IHeaderContentProps) {
  const { selectedValues, toggleSelectAll, data } = useContext(
    OutlawArchiveContext
  );
  return (
    <TableRow >
      {
        columns.map((column) => {
          if (column.dataKey === "checkbox") {
            return (
              <StyledHeaderCell padding="checkbox" style={{ width: 30 }}>
                <Checkbox
                  indeterminate={
                    selectedValues.size > 0 && selectedValues.size < data.length
                  }
                  checked={selectedValues.size === data.length}
                  onChange={toggleSelectAll}
                  sx={{ color: "#F2F2F2" }}
                />
              </StyledHeaderCell>
            )
          } else {
            return ((
              <StyledHeaderCell
                key={column.dataKey}
                align={column.numeric || false ? "right" : "left"}
                style={{ width: column.width }}
              >
                {column.label}
              </StyledHeaderCell>
            ))
          }

        })
      }
    </TableRow >
  );
}
