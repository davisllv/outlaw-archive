/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

interface IInputTextFieldProps extends FieldValues {
  name: string;
  control: any;
  defaultValue: string;
}

export function InputTextField({
  name,
  control,
  defaultValue,
  rest,
}: IInputTextFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      {...rest}
      render={({ field }) => (
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={field.onChange}
          defaultValue={defaultValue}
        />
      )}
    />
  );
}
