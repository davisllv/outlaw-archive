import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import Chance from "chance";
import Checkbox from "@mui/material/Checkbox";

interface Data {
  id: number;
  wantedName: string;
  wantedStatus: string;
  bountyValue: string;
  dearOrAlive: boolean;
  location: string;
  notes: string;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
}

const chance = new Chance(42);

function createData(id: number): Data {
  return {
    id,
    wantedName: chance.first(),
    wantedStatus: chance.pickone(["Pendente", "Capturado", "Morto"]),
    bountyValue: chance.dollar({ max: 250 }),
    dearOrAlive: chance.bool(),
    location: chance.pickone([
      "Valentine",
      "Saint Denis",
      "Blackwater",
      "Rhodes",
      "Annesburg",
    ]),
    notes: chance.sentence(),
  };
}

const columns: ColumnData[] = [
  {
    width: 100,
    label: "Nome Procurado",
    dataKey: "wantedName",
  },
  {
    width: 50,
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

const rows: Data[] = Array.from({ length: 200 }, (_, index) =>
  createData(index)
);

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
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
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

export default function ReactVirtualizedTable() {
  const [selected, setSelected] = React.useState<Set<number>>(new Set());
  console.log(selected);
  const toggleSelection = (id: number) => {
    const newSelected = new Set(selected);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected);
  };

  const toggleSelectAll = () => {
    if (selected.size === rows.length) {
      setSelected(new Set()); // Desseleciona todos
    } else {
      const allIds = new Set(rows.map((row) => row.id)); // Seleciona todos
      setSelected(allIds);
    }
  };

  function fixedHeaderContent() {
    return (
      <TableRow>
        <TableCell
          padding="checkbox"
          style={{ width: 30 }}
          sx={{
            color: "#F2F2F2",
            backgroundColor: "#333333",
            fontWeight: "bold",
            borderBottom: "1px solid #4EA8DE",
          }}
        >
          <Checkbox
            indeterminate={selected.size > 0 && selected.size < rows.length}
            checked={selected.size === rows.length}
            onChange={toggleSelectAll}
            sx={{ color: "#F2F2F2" }}
          />
        </TableCell>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? "right" : "left"}
            style={{ width: column.width }}
            sx={{
              backgroundColor: "#333333",
              color: "#F2F2F2",
              fontWeight: "bold",
              borderBottom: "1px solid #4EA8DE",
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_: number, row: Data) {
    return (
      <React.Fragment>
        <TableCell
          padding="checkbox"
          style={{ width: 30 }}
          sx={{
            color: "#F2F2F2",
            backgroundColor: "#262626",
            fontWeight: "bold",
            borderBottom: "1px solid #333333",
          }}
        >
          <Checkbox
            checked={selected.has(row.id)}
            onChange={() => toggleSelection(row.id)}
            sx={{ color: "#F2F2F2" }}
          />
        </TableCell>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? "right" : "left"}
            sx={{
              color: "#F2F2F2",
              backgroundColor: "#262626",
              borderBottom: "1px solid #333333",
              padding: "12px",
            }}
          >
            {column.dataKey === "dearOrAlive"
              ? row[column.dataKey]
                ? "Vivo"
                : "Morto"
              : row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  return (
    <Paper
      style={{ height: "90vh", width: "100%", backgroundColor: "#1A1A1A" }}
    >
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
