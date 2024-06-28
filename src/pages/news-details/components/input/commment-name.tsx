/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { CommmentFieldType } from "../newComment";
import { IComment } from "../../../../types/commentType";
import { blueGrey } from "@mui/material/colors";

interface IInput {
  name: CommmentFieldType;
  control: Control<IComment, any>;
  errors: FieldErrors<IComment>;
  trigger: UseFormTrigger<IComment>;
}
export function InputCommentName({ name, control, errors, trigger }: IInput) {
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
            {...field}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& input": {
                  fontFamily: "Fredoka",
                },
              },
            }}
            value={field.value ? field.value.toString() : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors[name as keyof FieldErrors<IComment>]}
            helperText={errors[name as keyof FieldErrors<IComment>]?.message}
            // onBlur={() => trigger(name)}
            onChange={(e) => {
              field.onChange(e);
              errors[name as keyof FieldErrors<IComment>] && trigger(name);
            }}
          />
        )}
      />
    </>
  );
}
