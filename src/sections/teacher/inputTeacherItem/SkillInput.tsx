/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form";
import InputSlider from "./inputSlider";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { TeacherFieldType } from "../userItem";
import { blueGrey } from "@mui/material/colors";
import { ITeacher, ITeacherSkill } from "../../../types/teacherType";
import { MdDeleteForever } from "react-icons/md";
// import { blueGrey } from "@mui/material/colors";

interface IProps {
  control: Control<ITeacher, any>;
  errors: FieldErrors<ITeacher>;
  trigger: UseFormTrigger<ITeacher>;
  name: TeacherFieldType;
}

export function SkillInput({ control, errors, trigger, name }: IProps) {
  const removeSkill = (indexToRemove: number, field: any) => {
    const newSkills = [...field.value];
    newSkills.splice(indexToRemove, 1);
    field.onChange(newSkills);
  };
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="skill-content"
        id="skill-header"
        sx={{ pl: 0 }}
      >
        <Typography
          variant="body2"
          component="label"
          color={blueGrey[600]}
          fontFamily={"Public Sans, sans-serif"}
          sx={{ textTransform: "capitalize", fontWeight: "500" }}
        >
          Koʻnikmalar:
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <Controller
          name={name}
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <>
              {Array.isArray(field.value)
                ? field.value.map((skill, index) => {
                    return (
                      <Grid key={index} container spacing={2}>
                        <Grid xs={12} md={7}>
                          <TextField
                            size="small"
                            sx={{
                              my: "8px",
                            }}
                            {...field}
                            value={skill.name}
                            name={`${name}[${index}].name`}
                            placeholder="koʻnikma..."
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors?.skills?.[index]?.name}
                            helperText={errors?.skills?.[index]?.name?.message}
                            onBlur={() => {
                              trigger(`skills.${index}.name`);
                            }}
                            onChange={(e) => {
                              const newSkills = [
                                ...(field.value as ITeacherSkill[]),
                              ];
                              newSkills[index].name = e.target.value;
                              field.onChange(newSkills);
                            }}
                          />
                        </Grid>
                        <Grid
                          xs={12}
                          sm={10}
                          md={4}
                          sx={{
                            my: "auto",
                          }}
                        >
                          <InputSlider
                            value={Number((skill as ITeacherSkill).percent)}
                            onChange={(newValue: number) => {
                              const newSkills = [
                                ...(field.value as ITeacherSkill[]),
                              ];
                              newSkills[index] = Object.assign(
                                {},
                                newSkills[index],
                                { percent: newValue }
                              );
                              field.onChange(newSkills);
                            }}
                          />
                        </Grid>
                        <Grid sm={1} md={1} display="flex" alignItems="center">
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => removeSkill(index, field)}
                            sx={{ fontSize: "20px" }}
                          >
                            <MdDeleteForever />
                          </Button>
                        </Grid>
                      </Grid>
                    );
                  })
                : null}
              <Button
                onClick={() => {
                  if ((field.value as ITeacherSkill[]).length <= 3) {
                    field.onChange([
                      ...(field.value as ITeacherSkill[]),
                      { name: "", percent: "0" },
                    ]);
                  }
                }}
                variant="outlined"
                color="primary"
                disabled={(field.value as ITeacherSkill[]).length === 3}
              >
                koʻnikma qo'shish
              </Button>
            </>
          )}
        />
      </AccordionDetails>
    </Accordion>
  );
}
