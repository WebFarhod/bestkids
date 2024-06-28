/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// import { teacherData } from "../../../data/teacherData";
import { Avatar, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ProgramFieldType } from "../program-input";
import {
  Control,
  FieldErrors,
  UseFormTrigger,
  useController,
} from "react-hook-form";
import { IProgram } from "../../../types/programType";
import { useTeaches } from "../../../service/query/teacher/teacherQuery";
import { imagePath } from "../../../utils/file-path";

interface IProps {
  name: ProgramFieldType;
  control: Control<IProgram, any>;
  errors: FieldErrors<IProgram>;
  trigger: UseFormTrigger<IProgram>;
}
function InputTeacher({
  control,
  name,
}: //  errors, trigger
IProps) {
  // const [age, setAge] = React.useState("7");

  const dataQuery = useTeaches();
  const teacherData = dataQuery.data;
  const { field } = useController({
    name,
    control,
  });

  const handleChange = (e: SelectChangeEvent) => {
    // setAge(e.target.value as string);
    field.onChange(e);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ mb: 1, fontWeight: "500" }}
      >
        Oʻqituvchi
      </Typography>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeof field.value === "string" ? field.value : ""}
          //   label="Age"
          onChange={handleChange}
        >
          {teacherData?.map((v) => (
            <MenuItem value={v._id}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar alt="Remy Sharp" src={imagePath(v.image)} />
                <Typography noWrap={true} variant="body1">
                  {`${v.name} ${v.surname}`}
                </Typography>
              </Stack>
            </MenuItem>
          ))}
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
export default React.memo(InputTeacher);
