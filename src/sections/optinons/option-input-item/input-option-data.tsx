/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { OptionFieldType } from "../option-input";
import { IOption } from "../../../types/optionType";

interface IInput {
  name: OptionFieldType;
  control: Control<IOption, any>;
  errors: FieldErrors<IOption>;
  trigger: UseFormTrigger<IOption>;
}
export function InputOptionData({ name, control, errors, trigger }: IInput) {
  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ fontWeight: "500" }}
      >
        Ismi
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
            error={!!errors[name as keyof FieldErrors<IOption>]}
            helperText={errors[name as keyof FieldErrors<IOption>]?.message}
            onBlur={() => trigger(name)}
            onChange={(e) => {
              field.onChange(e);
              errors[name as keyof FieldErrors<IOption>] && trigger(name);
            }}
          />
        )}
      />
    </>
  );
}
