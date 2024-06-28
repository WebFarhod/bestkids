/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import {
  Control,
  FieldErrors,
  UseFormTrigger,
  useController,
} from "react-hook-form";
import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { TeacherFieldType } from "../userItem";
import { useTeacherRank } from "../../../service/query/teacher/teacherRankQuery";
import { useCreatTeacherRank } from "../../../service/query/teacher/teacherMutations";
import { ITeacher, ITeacherRank } from "../../../types/teacherType";

const filter = createFilterOptions<ITeacherRank>();

interface IProps {
  name: TeacherFieldType;
  control: Control<ITeacher, any>;
  errors: FieldErrors<ITeacher>;
  trigger: UseFormTrigger<ITeacher>;
}
const InputNewType = ({
  name,
  control,
}: // errors,
// trigger,
IProps) => {
  const dataQuery = useTeacherRank();
  const rankData = dataQuery.data || [];

  const { field } = useController({
    name,
    control,
  });

  const [value, setValue] = React.useState<ITeacherRank | null>({
    title: field.value?.toString() || "",
  });
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      title: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: "",
  });

  const createTeacherRank = useCreatTeacherRank();
  const createSubmit = (data: ITeacherRank) => {
    setValue(data);
    createTeacherRank.mutate(data);
    handleClose();
  };
  React.useEffect(() => {
    field.onChange(value?.title);
  }, [value]);
  return (
    <React.Fragment>
      <Typography
        variant="body2"
        component="label"
        color={blueGrey[600]}
        fontFamily={"Public Sans, sans-serif"}
        sx={{ textTransform: "capitalize", fontWeight: "500" }}
      >
        Kategoriya
      </Typography>
      <Autocomplete
        sx={{
          my: "8px",
        }}
        size="small"
        value={value}
        onChange={(_event, newValue) => {
          if (typeof newValue === "string") {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={rankData}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        freeSolo
        renderInput={(params) => <TextField {...params} label="" />}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Katigoriya qo`shish</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Katigoriya qoʻshish qo`shishni istaysizmi?{" "}
          </DialogContentText>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            id="name"
            value={dialogValue.title}
            onChange={(event) =>
              setDialogValue({
                ...dialogValue,
                title: event.target.value,
              })
            }
            label="katigoriya"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="outlined" onClick={handleClose}>
            Bekor qilish
          </Button>
          <Button
            disabled={
              rankData.some(
                (option: ITeacherRank) => option.title === dialogValue.title
              ) || dialogValue.title.trim() == ""
            }
            type="button"
            variant="outlined"
            onClick={() => {
              const data = { ...dialogValue, title: dialogValue.title.trim() };
              createSubmit(data);
            }}
          >
            {rankData.some(
              (option: ITeacherRank) => option.title === dialogValue.title
            )
              ? "Mavjud katigoriya"
              : "Qoʻshish"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default React.memo(InputNewType);
