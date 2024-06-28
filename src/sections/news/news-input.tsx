/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useRef } from "react";
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
// import { defaultProgram, useProgramStore } from "../../store/admin/program";
// import {
//   useCreatProgram,
//   useUpdateProgram,
// } from "../../service/query/program/programMutations";
import { defaultNew, useNewStore } from "../../store/admin/new";
import { INew } from "../../types/newType";
import InputNewImage from "./new-input-item/input-new-image";
import {
  useCreatNew,
  useUpdateNew,
} from "../../service/query/new/newMutations";
import { InputNewData } from "./new-input-item/input-new-data";
import InputNewType from "./new-input-item/input-new-type";
import ReactQuillComponent from "./new-input-item/input-new";
// import InputImage from "./program-input-item/input-program-image";
// import InputTeacher from "./program-input-item/input-program-teacher";
// import { InputProgramData } from "./program-input-item/input-program-data";
// import { InputProgramAbout } from "./program-input-item/input-program-about";
// import InputProgramInfo from "./program-input-item/input-program-info";
// import InputProgramDescription from "./program-input-item/input-program-description";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

const schema = yup.object({
  title: yup.string().required("sarlavha kiriting"),
  image: yup.string(),
  type: yup.string().required("tur kiriting"),
  body: yup.string().required("nnn kiriting"),
  //   about: yup.string().required("Batafsil ma`lumot kiriting"),
});

export type NewFieldType = "title" | "image" | "type" | "body";

function ProgramInput() {
  const open = useNewStore((state) => state.modal);
  const setOpen = useNewStore((state) => state.setModal);
  const NewData = useNewStore((state) => state.newDetail);
  const setNewData = useNewStore((state) => state.setNewDetail);
  const modalType = useNewStore((state) => state.modalType);

  const reactRef = useRef();
  //react query
  const createNew = useCreatNew();
  const updateNew = useUpdateNew();

  const {
    handleSubmit,
    // watch,
    control,
    reset,
    formState: { errors },
    trigger,
    setValue,
    getValues,
  } = useForm<INew>({
    defaultValues: NewData && NewData,
    resolver: yupResolver(schema),
  } as unknown as UseFormProps<INew>);

  const createSubmit: SubmitHandler<INew> = (data) => {
    console.log(data);
    createNew.mutate(data);
    setOpen(false);
  };

  // console.log("watch", watch());
  const updateSubmit: SubmitHandler<INew> = async (data) => {
    const isValid = await trigger();
    isValid && (updateNew.mutate(data), setOpen(false));
  };

  React.useEffect(() => {
    const resetForm = () => {
      reset(NewData);
    };
    resetForm();
  }, [NewData, reset, open]);
  return (
    <>
      <Dialog
        maxWidth={"xl"}
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
              <InputNewImage setValue={setValue} getValues={getValues} />
            </Grid>
            <Grid xs={12} md={6}>
              <Grid xs={12} md={6}>
                <InputNewData
                  name="title"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputNewType
                  name="type"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
            </Grid>
            <Grid xs={12}>
              <ReactQuillComponent
                reactRef={reactRef}
                name="body"
                control={control}
                errors={errors}
                trigger={trigger}
              />
            </Grid>
          </Grid>
          {/* </Box> */}
        </DialogContent>
        <DialogActions sx={{ mr: 6 }}>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              setNewData(defaultNew);
              setOpen(false);
            }}
          >
            Bekor qilish
          </Button>
          {modalType === "add" ? (
            <Button
              //   disabled={createNew.isPending}
              variant="contained"
              color="success"
              type="submit"
            >
              Qoʻshish
            </Button>
          ) : (
            <Button
              //   disabled={createNew.isPending}
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
export default memo(ProgramInput);
