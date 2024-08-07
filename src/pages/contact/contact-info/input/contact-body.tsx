/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { ContactFieldType } from "../ContactForm";
import { IContact } from "../../../../types/contactType";
//type

interface IInput {
  name: ContactFieldType;
  control: Control<IContact, any>;
  errors: FieldErrors<IContact>;
  trigger: UseFormTrigger<IContact>;
}
export default function ContactBody({
  name,
  control,
  errors,
  trigger,
}: IInput) {
  return (
    <>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ mb: 1, fontWeight: "500", fontFamily: "Fredoka" }}
      >
        Tavsifi
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <TextareaAutosize
              minRows={3}
              {...field}
              aria-label="empty textarea"
              sx={{
                my: "8px",
              }}
              value={field.value ? field.value.toString() : ""}
              // onBlur={() => trigger(name)}
              onChange={(e) => {
                field.onChange(e);
                errors[name as keyof FieldErrors<IContact>] && trigger(name);
              }}
            />
            {!!errors[name as keyof FieldErrors<IContact>] && (
              <Typography
                component="span"
                sx={{
                  color: `${
                    !!errors[name as keyof FieldErrors<IContact>] && "red"
                  }`,
                  // margin-bottom: 15px;
                  // line-height: 30px;
                  fontFamily: "Fredoka",
                  fontSize: "18px",
                  fontWeight: "normal",
                  lineHeight: "30px",
                  margin: "4px 14px 0px 0",
                }}
              >
                {errors[name as keyof FieldErrors<IContact>]?.message}
              </Typography>
              // <span >
              //   {errors[name as keyof FieldErrors<IProgram>]?.message}
              // </span>
            )}
          </>
        )}
      />
    </>
  );
}

// export default function InputProgramDescription() {
//   return <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />;
// }

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 0 !important;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: #212B36;
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
