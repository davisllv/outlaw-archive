/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem, Select } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

interface ISelectFieldProps extends FieldValues {
  name: string;
  control: any;
  defaultValue: string;
  options: {
    value: string;
    label: string;
  }[];
}

export function SelectField({
  name,
  control,
  defaultValue,
  options,
  rest,
}: ISelectFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      {...rest}
      render={({ field }) => (
        <Select
          labelId="status-select-label"
          id="status-select"
          defaultValue={defaultValue}
          onChange={field.onChange}
          sx={{
            color: "#F2F2F2",
            "& .MuiSvgIcon-root": {
              color: "#F2F2F2",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#333333",
                color: "#F2F2F2",
              },
            },
          }}
        >
          {options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
