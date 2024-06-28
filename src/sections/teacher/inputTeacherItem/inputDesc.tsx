/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, useController } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TeacherFieldType } from "../userItem";
import "./inputDesc.css";
import { ITeacher } from "../../../types/teacherType";
import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

interface IProps {
  control: Control<ITeacher, any>;
  name: TeacherFieldType;
  //   defaultValue?: string | null;
}

export function InputDesc({ control, name }: IProps) {
  const { field } = useController({
    name,
    control,
  });

  const valueProp = typeof field.value === "string" ? field.value : "";

  const handleChange = (value: string) => {
    field.onChange(value);
  };

  const handleFocus = () => {
    field.onBlur();
  };

  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ textTransform: "capitalize", fontWeight: "500" }}
      >
        Koʻnikmalar:
      </Typography>
      <ReactQuill
        className="quill-about"
        theme="snow"
        value={valueProp}
        onChange={handleChange}
        onFocus={handleFocus}
        modules={{
          toolbar: [["bold", "italic", "underline"]],
        }}
      />
    </>
  );
}
