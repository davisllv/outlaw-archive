/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem, Select, useTheme } from "@mui/material";
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
  const theme = useTheme()
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      {...rest}
      render={({ field }) => (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={defaultValue}
          onChange={field.onChange}
          sx={{
            color: theme.palette.text.primary,
            "& .MuiSvgIcon-root": {
              color: theme.palette.text.primary,
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: theme.palette.grey[500],
                color: theme.palette.text.primary,
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
