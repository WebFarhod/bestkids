/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Stack, TextField } from "@mui/material";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { TeacherFieldType } from "../userItem";
import { blueGrey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ITeacher, ITeacherInfo } from "../../../types/teacherType";
// import { ITeacher, ITeacherInfo } from "../../../../types/teacherType";

interface IProps {
  control: Control<ITeacher, any>;
  errors: FieldErrors<ITeacher>;
  trigger: UseFormTrigger<ITeacher>;
  name: TeacherFieldType;
}

export default function InputInfo({ control, errors, trigger, name }: IProps) {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="info-content"
        id="info-header"
        sx={{ pl: 0 }}
      >
        <Typography
          variant="body2"
          component="label"
          color={blueGrey[600]}
          fontFamily={"Public Sans, sans-serif"}
          sx={{ textTransform: "capitalize", fontWeight: "500" }}
        >
          Ma'lumotlar:
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <Stack spacing={1}>
          <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <>
                {Array.isArray(field.value) ? (
                  field.value.map((info, index) => {
                    return (
                      <Grid
                        key={index}
                        container
                        spacing={2}
                        alignItems="center"
                      >
                        <Grid xs={12} sm={5} md={8}>
                          <Typography
                            variant="body2"
                            component="label"
                            color={blueGrey[600]}
                            fontFamily={"Public Sans, sans-serif"}
                            sx={{
                              textTransform: "capitalize",
                              fontWeight: "500",
                            }}
                          >
                            {info.name}
                          </Typography>
                        </Grid>
                        <Grid
                          xs={12}
                          sm={7}
                          md={4}
                          sx={{
                            my: "auto",
                          }}
                        >
                          <TextField
                            size="small"
                            sx={{
                              my: "8px",
                            }}
                            {...field}
                            // placeholder={""}
                            variant="outlined"
                            value={(info as ITeacherInfo).info}
                            fullWidth
                            margin="normal"
                            error={!!errors.infos?.[index]?.info}
                            helperText={errors.infos?.[index]?.info?.message}
                            onBlur={() => trigger(name)}
                            onChange={(e) => {
                              const newInfo = [
                                ...(field.value as ITeacherInfo[]),
                              ];
                              newInfo[index].info = e.target.value;
                              field.onChange(newInfo);
                            }}
                          />
                        </Grid>
                      </Grid>
                    );
                  })
                ) : (
                  <p>sdf</p>
                )}
              </>
            )}
          />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
