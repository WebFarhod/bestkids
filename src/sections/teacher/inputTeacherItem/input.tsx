/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TeacherFieldType } from "../userItem";
import { TextField, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ITeacher } from "../../../types/teacherType";

interface IInput {
  name: TeacherFieldType;
  control: Control<ITeacher, any>;
  errors: FieldErrors<ITeacher>;
  trigger: UseFormTrigger<ITeacher>;
}
const InputTeacher = ({ name, control, errors, trigger }: IInput) => {
  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ textTransform: "capitalize", fontWeight: "500" }}
      >
        {name == "name" && "Ism"}
        {name == "surname" && "Familiya"}
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
            error={!!errors[name as keyof FieldErrors<ITeacher>]}
            helperText={errors[name as keyof FieldErrors<ITeacher>]?.message}
            onBlur={() => trigger(name)}
            onChange={(e) => {
              field.onChange(e);
              errors[name as keyof FieldErrors<ITeacher>] && trigger(name);
            }}
          />
        )}
      />
    </>
  );
};
export default InputTeacher;
