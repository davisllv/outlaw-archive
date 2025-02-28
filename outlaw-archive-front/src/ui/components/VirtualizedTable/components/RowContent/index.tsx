import { Checkbox, Chip } from "@mui/material";
import { IOutlawInformations } from "../../../../../data/types/interfaces/GeneralInterfaces";
import { StyledContentCell } from "../../styles";
import { useContext } from "react";
import { OutlawArchiveContext } from "../../../../../data/contexts/OutlawArchive/OutlawArchiveContext";
import { useFormContext } from "react-hook-form";
import { InputTextField } from "../../../InputTextField";
import { SelectField } from "../../../SelectField";
import { priceFormatter } from "../../../../../data/utils/formater";

const statusColors = {
  Procurado: "info",
  Capturado: "default",
} as const;

interface IRowContentProps {
  row: IOutlawInformations;
  onEditClick?: (row: IOutlawInformations) => void;
  isEditing?: boolean;
}

export function RowContent({ row, isEditing = false, onEditClick }: IRowContentProps) {
  const { control, formState: { errors } } = useFormContext();

  const { selectedValues } = useContext(
    OutlawArchiveContext
  );
  return (
    <>
      <StyledContentCell padding="checkbox" style={{ width: 30 }}>
        <Checkbox
          disabled
          checked={selectedValues.has(row.id)}
          sx={{ color: "#F2F2F2" }}
        />
      </StyledContentCell>
      <StyledContentCell onClick={() => { if (onEditClick) onEditClick(row) }}>
        {isEditing ? (
          <InputTextField
            name="wanted_name"
            id="outlined-error"
            error={!!errors.wanted_name}
            helperText={errors.wanted_name ? String(errors.wanted_name?.message) : undefined}
            control={control}
            defaultValue={row.wanted_name}
          />
        ) : (
          row.wanted_name
        )}
      </StyledContentCell>
      <StyledContentCell>
        {isEditing ? (
          <SelectField
            name="wanted_status"
            control={control}
            defaultValue={row.wanted_status}
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
            label={row.wanted_status}
            color={statusColors[row.wanted_status]}
            variant="outlined"
          />
        )}
      </StyledContentCell>
      <StyledContentCell align="right">{priceFormatter.format(Number(row.bounty_value))}</StyledContentCell>
      <StyledContentCell>
        <Chip
          label={row.dead_or_alive ? "Vivo" : "Morto"}
          sx={{
            backgroundColor: row.dead_or_alive ? "green" : "red",
            color: "white",
          }}
        />
      </StyledContentCell>
      <StyledContentCell>{row.location}</StyledContentCell>
      <StyledContentCell>{row.notes}</StyledContentCell>
    </>
  );
}
