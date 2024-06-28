/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ClassFieldType } from "../class-input";
import { IClass } from "../../../types/classType";

interface IInput {
  name: ClassFieldType;
  control: Control<IClass, any>;
  errors: FieldErrors<IClass>;
  trigger: UseFormTrigger<IClass>;
}
export function InputClassData({ name, control, errors, trigger }: IInput) {
  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ fontWeight: "500" }}
      >
        Sinf nomi
      </Typography>
      <Controller
        name={name}
        control={control}
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
            error={!!errors[name as keyof FieldErrors<IClass>]}
            helperText={errors[name as keyof FieldErrors<IClass>]?.message}
            onBlur={() => trigger(name)}
            onChange={(e) => {
              field.onChange(e);
              errors[name as keyof FieldErrors<IClass>] && trigger(name);
            }}
          />
        )}
      />
    </>
  );
}
