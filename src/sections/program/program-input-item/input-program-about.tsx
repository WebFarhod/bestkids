/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  FieldErrors,
  UseFormTrigger,
  useController,
} from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IProgram } from "../../../types/programType";
import { ProgramFieldType } from "../program-input";
import "./input-program-about.css";
import { Box, Typography } from "@mui/material";
import { error } from "../../../theme/palette";
import { blueGrey } from "@mui/material/colors";

interface IProps {
  name: ProgramFieldType;
  control: Control<IProgram, any>;
  errors: FieldErrors<IProgram>;
  trigger: UseFormTrigger<IProgram>;
}

export function InputProgramAbout({ control, name, errors, trigger }: IProps) {
  const { field } = useController({
    name,
    control,
  });
  const valueProp = typeof field.value === "string" ? field.value : "";
  return (
    <Box component="div" my={1}>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ fontWeight: "500", mb: 1 }}
      >
        Batafsil ma`lumot
      </Typography>
      <ReactQuill
        className="program-about"
        theme="snow"
        value={valueProp}
        onChange={(e) => {
          field.onChange(e == "<p><br></p>" ? "" : e);
          errors[name as keyof FieldErrors<IProgram>] && trigger(name);
        }}
        onBlur={() => trigger(name)}
        modules={{
          toolbar: [["bold", "italic", "underline"]],
        }}
      />
      {!!errors[name as keyof FieldErrors<IProgram>] && (
        <Typography
          component="span"
          sx={{
            color: error.main,
            fontSize: "12px",
            margin: "4px 14px 0px",
          }}
        >
          {errors[name as keyof FieldErrors<IProgram>]?.message}
        </Typography>
      )}
    </Box>
  );
}
