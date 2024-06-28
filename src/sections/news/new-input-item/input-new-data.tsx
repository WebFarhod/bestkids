/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { NewFieldType } from "../news-input";
import { INew } from "../../../types/newType";

interface IInput {
  name: NewFieldType;
  control: Control<INew, any>;
  errors: FieldErrors<INew>;
  trigger: UseFormTrigger<INew>;
}
export function InputNewData({ name, control, errors, trigger }: IInput) {
  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ textTransform: "capitalize", fontWeight: "500" }}
      >
        Sarlavha
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
            error={!!errors[name as keyof FieldErrors<INew>]}
            helperText={errors[name as keyof FieldErrors<INew>]?.message}
            onBlur={() => trigger(name)}
            onChange={(e) => {
              field.onChange(e);
              errors[name as keyof FieldErrors<INew>] && trigger(name);
            }}
          />
        )}
      />
    </>
  );
}
