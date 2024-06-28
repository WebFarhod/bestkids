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
import { NewFieldType } from "../news-input";
import {
  Control,
  FieldErrors,
  UseFormTrigger,
  useController,
} from "react-hook-form";
import { INew, INewType } from "../../../types/newType";
import { useNewsType } from "../../../service/query/new/newTypeQuery";
import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useCreatNewType } from "../../../service/query/new/newMutations";

const filter = createFilterOptions<INewType>();

interface IProps {
  name: NewFieldType;
  control: Control<INew, any>;
  errors: FieldErrors<INew>;
  trigger: UseFormTrigger<INew>;
}
export default function InputNewType({
  name,
  control,
}: // errors,
// trigger,
IProps) {
  const dataQuery = useNewsType();
  const newsTypeData = dataQuery.data || [];

  const { field } = useController({
    name,
    control,
  });


  const [value, setValue] = React.useState<INewType | null>({
    title: field?.value?.toString() || "",
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

  const createNewType = useCreatNewType();
  const createSubmit = (data: INewType) => {
    setValue(data);
    createNewType.mutate(data);
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
            // timeout to avoid instant validation of the dialog's form.
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
        options={newsTypeData}
        getOptionLabel={(option) => {
          // for example value selected with enter, right from the input
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
        renderOption={(props, option) => <li {...props}>{option?.title}</li>}
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
              newsTypeData.some(
                (option: INewType) => option.title === dialogValue.title
              ) || dialogValue.title.trim() == ""
            }
            type="button"
            variant="outlined"
            onClick={() => {
              const data = { ...dialogValue, title: dialogValue.title.trim() };
              createSubmit(data);
            }}
          >
            {newsTypeData.some(
              (option: INewType) => option.title === dialogValue.title
            )
              ? "Mavjud katigoriya"
              : "Qoʻshish"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
