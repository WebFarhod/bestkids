/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import * as yup from "yup";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useForm, SubmitHandler, UseFormProps } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TransitionProps } from "@mui/material/transitions";

import { defaultOption, useOptionStore } from "../../store/admin/option";
import InputOptionImage from "./option-input-item/input-option-image";
import {
  useCreatOption,
  useUpdateOption,
} from "../../service/query/option/optionMutations";
import { IOption } from "../../types/optionType";
import { InputOptionData } from "./option-input-item/input-option-data";
import InputOptionBody from "./option-input-item/input-option-description";
import InputOptionRating from "./option-input-item/input-option-rating";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

const schema = yup.object({
  image: yup.string(),
  user: yup.string().required("Ism kiriting"),
  body: yup.string().required("Fikr kiriting"),
  rating: yup.number().required("Daraja kiriting"),
});

export type OptionFieldType = "image" | "user" | "body" | "rating";

function OptionInput() {
  const open = useOptionStore((state) => state.modal);
  const setOpen = useOptionStore((state) => state.setModal);
  const ClassData = useOptionStore((state) => state.optionDetail);
  const setClassData = useOptionStore((state) => state.setOptionDetail);
  const modalType = useOptionStore((state) => state.modalType);

  //react query
  const createOption = useCreatOption();
  const updateOption = useUpdateOption();

  const {
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
    trigger,
    setValue,
    getValues,
  } = useForm<IOption>({
    defaultValues: ClassData && ClassData,
    resolver: yupResolver(schema),
  } as unknown as UseFormProps<IOption>);

  const createSubmit: SubmitHandler<IOption> = (data) => {
    createOption.mutate(data);
    setOpen(false);
  };
  console.log("asd", watch());

  const updateSubmit: SubmitHandler<IOption> = async (data) => {
    console.log("update:", data);

    updateOption.mutate(data);
    setOpen(false);
  };

  React.useEffect(() => {
    const resetForm = () => {
      reset(ClassData);
    };
    resetForm();
  }, [ClassData, reset, open]);
  return (
    <>
      <Dialog
        maxWidth={"lg"}
        fullWidth={true}
        open={open}
        TransitionComponent={Transition}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit(createSubmit),
        }}
      >
        <DialogTitle>
          {modalType === "update" ? "Tahrirlash" : "Qoʻshish"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>zsc</DialogContentText> */}
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <Grid container spacing={5}>
            <Grid xs={12} md={6}>
              <InputOptionImage setValue={setValue} getValues={getValues} />
            </Grid>
            <Grid xs={12} md={6}>
              <Grid>
                <InputOptionData
                  name="user"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid>
                <InputOptionBody
                  name="body"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid>
                <InputOptionRating
                  name="rating"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ mr: 6 }}>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              setClassData(defaultOption);
              setOpen(false);
            }}
          >
            Bekor qilish
          </Button>
          {modalType === "add" ? (
            <Button
              disabled={createOption.isPending}
              variant="contained"
              color="success"
              type="submit"
            >
              Qoʻshish
            </Button>
          ) : (
            <Button
              disabled={createOption.isPending}
              variant="contained"
              color="success"
              type="button"
              onClick={() => {
                updateSubmit(getValues());
              }}
            >
              Tahrirlash
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
export default memo(OptionInput);
