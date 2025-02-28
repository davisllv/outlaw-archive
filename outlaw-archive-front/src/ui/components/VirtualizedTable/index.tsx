import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { RowContent } from "./components/RowContent";
import { VirtuosoTableComponents } from "../TableComponents";
import {
  IColumnData,
  IOutlawInformations,
} from "../../../data/types/interfaces/GeneralInterfaces";
import { HeaderContent } from "./components/HeaderContent";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { OutlawArchiveContext } from "../../../data/contexts/OutlawArchive/OutlawArchiveContext";


const columns: IColumnData[] = [
  {
    width: 30,
    label: "Checkbox",
    dataKey: "checkbox",
  },
  {
    width: 100,
    label: "Nome Procurado",
    dataKey: "wanted_name",
  },
  {
    width: 60,
    label: "Status",
    dataKey: "wanted_status",
  },
  {
    width: 80,
    label: "Valor Recompensa",
    dataKey: "bounty_value",
    numeric: true,
  },
  {
    width: 100,
    label: "Vivo ou Morto",
    dataKey: "dead_or_alive",
  },
  {
    width: 110,
    label: "Cidade",
    dataKey: "location",
  },
  {
    width: 130,
    label: "Notas",
    dataKey: "notes",
  },
];

export default function ReactVirtualizedTable() {
  const { reset } = useFormContext();
  const { editStates, changeEditState, data } = useContext(OutlawArchiveContext);
  const handleEditClick = (row: IOutlawInformations) => {
    if (!(row.id in editStates)) {
      reset({
        ...row,
        bounty_value: Number(row.bounty_value)
      });
      changeEditState(row.id);
    }
  };
  return (
    <Paper
      style={{
        height: "80vh",
        width: "100%",
      }}
    >
      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={() => HeaderContent({ columns })}
        itemContent={(_, row) => (
          <RowContent
            row={row}
            isEditing={editStates[row.id] ?? false}
            onEditClick={handleEditClick}
          />
        )}
      />
    </Paper>
  );
}
