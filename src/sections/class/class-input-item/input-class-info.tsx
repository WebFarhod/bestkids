/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Accordion, AccordionDetails, AccordionSummary, Stack, TextField, Typography } from "@mui/material";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import { ClassFieldType } from "../class-input";
import { blueGrey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { IClass, IClassInfo } from "../../../types/classType";
// import { ITeacher, IClassInfo } from "../../../../types/teacherType";

interface IProps {
  control: Control<IClass, any>;
  errors: FieldErrors<IClass>;
  trigger: UseFormTrigger<IClass>;
  name: ClassFieldType;
}

export default function InputClassInfo({
  control,
  errors,
  trigger,
  name,
}: IProps) {
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
        <Stack spacing={3}>
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
                            value={(info as IClassInfo).info}
                            fullWidth
                            margin="normal"
                            error={!!errors.infos?.[index]?.info}
                            helperText={errors.infos?.[index]?.info?.message}
                            onBlur={() => trigger(name)}
                            onChange={(e) => {
                              const newInfo = [
                                ...(field.value as IClassInfo[]),
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
