import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { VirtuosoTableComponents } from "../TableComponents";
import {
  IColumnData,
  IOutlawInformations,
} from "../../../data/types/interfaces/GeneralInterfaces";
import { RowContent } from "./components/RowContent";
import { data } from "../../../data/data";
import { HeaderContent } from "./components/HeaderContent";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { ToogleSelectionContext } from "../../../data/contexts/ToogleSelection/ToogleSelectionContext";

const columns: IColumnData[] = [
  {
    width: 100,
    label: "Nome Procurado",
    dataKey: "wantedName",
  },
  {
    width: 60,
    label: "Status",
    dataKey: "wantedStatus",
  },
  {
    width: 80,
    label: "Valor Recompensa",
    dataKey: "bountyValue",
    numeric: true,
  },
  {
    width: 100,
    label: "Vivo ou Morto",
    dataKey: "dearOrAlive",
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
  const { editStates, changeEditState } = useContext(ToogleSelectionContext);

  const handleEditClick = (row: IOutlawInformations) => {
    if (!(row.id in editStates)) {
      reset({
        ...row,
      });
      changeEditState(row.id);
    }
  };
  return (
    <Paper
      style={{
        height: "80vh",
        width: "100%",
        backgroundColor: "#1A1A1A",
        borderRadius: "32px",
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
