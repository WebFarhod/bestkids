/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ContactFieldType } from "../ContactForm";
import { IContact } from "../../../../types/contactType";
//type
interface IInput {
  name: ContactFieldType;
  control: Control<IContact, any>;
  errors: FieldErrors<IContact>;
  trigger: UseFormTrigger<IContact>;
}
export function InputContactName({ name, control, errors, trigger }: IInput) {
  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{
          textTransform: "capitalize",
          fontWeight: "500",
          fontFamily: "Fredoka",
        }}
      >
        {name == "user"
          ? "Ismingizni kiriting"
          : "Telefon raqamingizni kiriting"}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            size="small"
            sx={{
              my: "8px",
              bgcolor: "white",
              "& .MuiOutlinedInput-root": {
                "& input": {
                  fontFamily: "Fredoka",
                },
              },
            }}
            {...field}
            value={field.value ? field.value.toString() : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors[name as keyof FieldErrors<IContact>]}
            helperText={errors[name as keyof FieldErrors<IContact>]?.message}
            // onBlur={() => trigger(name)}
            onChange={(e) => {
              field.onChange(e);
              errors[name as keyof FieldErrors<IContact>] && trigger(name);
            }}
          />
        )}
      />
    </>
  );
}
