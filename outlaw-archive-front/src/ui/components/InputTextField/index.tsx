/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

interface IInputTextFieldProps extends FieldValues {
  name: string;
  control: any;
  defaultValue: string;
  error: boolean;
  helperText?: string;
}

export function InputTextField({
  name,
  control,
  defaultValue,
  error = false,
  helperText = undefined,
  ...rest
}: IInputTextFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      {...rest}
      render={({ field }) => (
        <TextField
          id={error ? "outlined-error" : "standard-basic"}
          variant="standard"
          error={error}
          helperText={helperText}
          onChange={field.onChange}
          defaultValue={defaultValue}
        />
      )}
    />
  );
}
