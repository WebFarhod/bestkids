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
import { IProgram } from "../../types/programType";
import { defaultProgram, useProgramStore } from "../../store/admin/program";
import {
  useCreatProgram,
  useUpdateProgram,
} from "../../service/query/program/programMutations";
import InputImage from "./program-input-item/input-program-image";
// import InputTeacher from "./program-input-item/input-program-teacher";
import { InputProgramData } from "./program-input-item/input-program-data";
import { InputProgramAbout } from "./program-input-item/input-program-about";
import InputProgramInfo from "./program-input-item/input-program-info";
import InputProgramDescription from "./program-input-item/input-program-description";

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
  name: yup.string().required("Ism kiriting"),
  description: yup.string().required("tavsif kiriting"),
  about: yup.string().required("Batafsil ma`lumot kiriting"),
  // type: yup.string().required("tur kiriting"),
  price: yup.string().required("narx kiriting"),
  infos: yup.array().of(
    yup.object({
      name: yup.string(),
      info: yup.string(),
    })
  ),
  // Program: yup.object({
  //   name: yup.string(),
  //   percent: yup.string(),
  // }),
});

export type ProgramFieldType =
  | "image"
  | "name"
  | "description"
  | "about"
  // | "type"
  | "price"
  | "infos";
// | "teacher"

function ProgramInput() {
  const open = useProgramStore((state) => state.modal);
  const setOpen = useProgramStore((state) => state.setModal);
  const ProgramData = useProgramStore((state) => state.programDetail);
  const setProgramData = useProgramStore((state) => state.setProgramDetail);
  const modalType = useProgramStore((state) => state.modalType);

  //react query
  const createProgram = useCreatProgram();
  const updateProgram = useUpdateProgram();

  const {
    handleSubmit,
    // watch,
    control,
    reset,
    formState: { errors },
    trigger,
    setValue,
    getValues,
  } = useForm<IProgram>({
    defaultValues: ProgramData && ProgramData,
    resolver: yupResolver(schema),
  } as unknown as UseFormProps<IProgram>);

  const createSubmit: SubmitHandler<IProgram> = (data) => {
    createProgram.mutate(data);
    setOpen(false);
  };

  // console.log("watch", watch());
  const updateSubmit: SubmitHandler<IProgram> = async (data) => {
    const isValid = await trigger();
    isValid && (updateProgram.mutate(data), setOpen(false));
  };

  React.useEffect(() => {
    const resetForm = () => {
      reset(ProgramData);
    };
    resetForm();
  }, [ProgramData, reset, open]);
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
              <InputImage setValue={setValue} getValues={getValues} />
            </Grid>
            <Grid xs={12} md={6}>
              <Grid>
                <InputProgramData
                  name="name"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid>
                <InputProgramDescription
                  name="description"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid>
                <InputProgramData
                  name="price"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              {/* <Grid>
                <InputTeacher
                  name="teacher"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid> */}
            </Grid>
            <Grid xs={12}>
              <InputProgramAbout
                name="about"
                control={control}
                errors={errors}
                trigger={trigger}
              />
            </Grid>
            <Grid xs={12}>
              <InputProgramInfo
                name="infos"
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
              setProgramData(defaultProgram);
              setOpen(false);
            }}
          >
            Bekor qilish
          </Button>
          {modalType === "add" ? (
            <Button
              disabled={createProgram.isPending}
              variant="contained"
              color="success"
              type="submit"
            >
              Qoʻshish
            </Button>
          ) : (
            <Button
              disabled={createProgram.isPending}
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
