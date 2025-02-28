export interface IOutlawInformations {
  id: number;
  wanted_name: string;
  wanted_status: "Procurado" | "Capturado";
  bounty_value: string;
  dead_or_alive: boolean;
  location: string;
  notes: string;
}

export interface IColumnData {
  dataKey: keyof IOutlawInformations | "checkbox";
  label: string;
  numeric?: boolean;
  width?: number;
}

export interface IEditState {
  [id: number]: boolean;
}
