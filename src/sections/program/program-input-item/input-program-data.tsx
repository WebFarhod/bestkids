/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ProgramFieldType } from "../program-input";
import { IProgram } from "../../../types/programType";

interface IInput {
  name: ProgramFieldType;
  control: Control<IProgram, any>;
  errors: FieldErrors<IProgram>;
  trigger: UseFormTrigger<IProgram>;
}
const selectName = (name: string) => {
  if (name == "name") {
    return "ismi";
  }
  if (name == "price") {
    return "dastur narxi";
  }
};
export function InputProgramData({ name, control, errors, trigger }: IInput) {
  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ textTransform:"capitalize", fontWeight: "500" }}
      >
        {selectName(name)}
      </Typography>
      <Controller
        name={name}
        control={control}
        // defaultValue={defaultValue[name]}
        render={({ field }) => (
          <TextField
            size="small"
            sx={{
              my: "8px",
            }}
            {...field}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors[name as keyof FieldErrors<IProgram>]}
            helperText={errors[name as keyof FieldErrors<IProgram>]?.message}
            onBlur={() => trigger(name)}
            onChange={(e) => {
              field.onChange(e);
              errors[name as keyof FieldErrors<IProgram>] && trigger(name);
            }}
          />
        )}
      />
    </>
  );
}
