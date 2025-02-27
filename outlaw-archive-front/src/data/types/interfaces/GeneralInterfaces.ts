export interface IOutlawInformations {
  id: number;
  wantedName: string;
  wantedStatus: "Procurado" | "Capturado";
  bountyValue: string;
  dearOrAlive: boolean;
  location: string;
  notes: string;
}

export interface IColumnData {
  dataKey: keyof IOutlawInformations;
  label: string;
  numeric?: boolean;
  width?: number;
}

export interface IEditState {
  [id: number]: boolean;
}
