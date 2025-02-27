import { Checkbox, Chip } from "@mui/material";
import { IOutlawInformations } from "../../../../../data/types/interfaces/GeneralInterfaces";
import { StyledContentCell } from "../../styles";
import { useContext } from "react";
import { ToogleSelectionContext } from "../../../../../data/contexts/ToogleSelection/ToogleSelectionContext";
import { useFormContext } from "react-hook-form";
import { InputTextField } from "../../../InputTextField";
import { SelectField } from "../../../SelectField";

const statusColors = {
  Procurado: "warning",
  Capturado: "info",
} as const;

interface IRowContentProps {
  row: IOutlawInformations;
  onEditClick: (row: IOutlawInformations) => void;
  isEditing: boolean;
}

export function RowContent({ row, isEditing, onEditClick }: IRowContentProps) {
  const { control } = useFormContext();

  const { selectedValues, toggleSelection } = useContext(
    ToogleSelectionContext
  );

  return (
    <>
      <StyledContentCell padding="checkbox" style={{ width: 30 }}>
        <Checkbox
          checked={selectedValues.has(row.id)}
          onChange={() => toggleSelection(row.id)}
          sx={{ color: "#F2F2F2" }}
        />
      </StyledContentCell>
      <StyledContentCell onClick={() => onEditClick(row)}>
        {isEditing ? (
          <InputTextField
            name="wantedName"
            control={control}
            defaultValue={row.wantedName}
          />
        ) : (
          row.wantedName
        )}
      </StyledContentCell>
      <StyledContentCell>
        {isEditing ? (
          <SelectField
            name="wantedStatus"
            control={control}
            defaultValue={row.wantedStatus}
            options={[
              {
                value: "Procurado",
                label: "Procurado",
              },
              {
                value: "Capturado",
                label: "Capturado",
              },
            ]}
          />
        ) : (
          <Chip
            label={row.wantedStatus}
            color={statusColors[row.wantedStatus]}
            variant="outlined"
          />
        )}
      </StyledContentCell>
      <StyledContentCell align="right">{row.bountyValue}</StyledContentCell>
      <StyledContentCell>
        <Chip
          label={row.dearOrAlive ? "Vivo" : "Morto"}
          sx={{
            backgroundColor: row.dearOrAlive ? "green" : "red",
            color: "white",
          }}
        />
      </StyledContentCell>
      <StyledContentCell>{row.location}</StyledContentCell>
      <StyledContentCell>{row.notes}</StyledContentCell>
    </>
  );
}
