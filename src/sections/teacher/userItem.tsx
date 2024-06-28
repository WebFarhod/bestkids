/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import * as yup from "yup";

import {
  // Backdrop,
  Box,
  Button,
  // CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { useForm, SubmitHandler, UseFormProps } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { TransitionProps } from "@mui/material/transitions";
import { SkillInput } from "./inputTeacherItem/SkillInput";
import InputTeacher from "./inputTeacherItem/input";
import InputInfo from "./inputTeacherItem/inputInfo";
import InputImg from "./inputTeacherItem/inputImg";

// import { defaultData } from "../../../../store/admin/teacher";
import { defaultData, useTeacherStore } from "../../store/admin/teacher";
import { InputDesc } from "./inputTeacherItem/inputDesc";
import { ITeacher } from "../../types/teacherType";
import {
  useCreateTeacher,
  useUpdateTeacher,
} from "../../service/query/teacher/teacherMutations";
import InputRank from "./inputTeacherItem/inputRank";
import InputTeacherSocial from "./inputTeacherItem/inputTeacherSocial";
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
  surname: yup.string().required("Familiya kiriting"),
  rank: yup.string().required("Lavozim kiriting"),
  description: yup.string().required("tavsif kiriting"),
  skills: yup.array().of(
    yup.object({
      name: yup.string(),
      percent: yup.string(),
    })
  ),
  infos: yup.array().of(
    yup.object({
      name: yup.string(),
      info: yup.string(),
    })
  ),
  socials: yup.array().of(
    yup.object({
      name: yup.string(),
      link: yup.string(),
    })
  ),
});

export type TeacherFieldType =
  | "image"
  | "name"
  | "surname"
  | "rank"
  | "description"
  | "skills"
  | "infos"
  | "socials";

function InputTeacherItem() {
  const TeacherData = useTeacherStore((state) => state.teacherDetail);
  const setTeacherData = useTeacherStore((state) => state.setTeacherDetail);
  const setOpen = useTeacherStore((state) => state.setModal);
  const open = useTeacherStore((state) => state.modal);
  const modalType = useTeacherStore((state) => state.modalType);

  //react query
  const createTeacher = useCreateTeacher();
  const updateTeacher = useUpdateTeacher();

  const {
    handleSubmit,
    // watch,
    control,
    reset,
    formState: { errors },
    trigger,
    setValue,
    getValues,
  } = useForm<ITeacher>({
    defaultValues: TeacherData && TeacherData,
    resolver: yupResolver(schema),
  } as unknown as UseFormProps<ITeacher>);

  const createSubmit: SubmitHandler<ITeacher> = (data) => {
    createTeacher.mutate(data);
    setOpen(false);
  };

  const updateSubmit: SubmitHandler<ITeacher> = async (data) => {
    const isValid = await trigger();
    isValid && (updateTeacher.mutate(data), setOpen(false));
  };

  React.useEffect(() => {
    const resetForm = () => {
      reset(TeacherData);
    };
    resetForm();
  }, [TeacherData, reset, open]);
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputImg setValue={setValue} getValues={getValues} />
              </Grid>
              <Grid xs={12} sm={6}>
                <InputTeacher
                  name="name"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
                <InputTeacher
                  name="surname"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
                <InputRank
                  name="rank"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid xs={12}>
                <InputDesc name="description" control={control} />
              </Grid>
              <Grid xs={12}>
                <SkillInput
                  name="skills"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid xs={12}>
                <InputInfo
                  name="infos"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid xs={12}>
                <InputTeacherSocial
                  name="socials"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions sx={{ mr: 6 }}>
          <Button
            color="error"
            variant="text"
            onClick={() => {
              setTeacherData(defaultData);
              setOpen(false);
            }}
          >
            Bekor qilish
          </Button>
          {modalType === "add" ? (
            <Button
              disabled={createTeacher.isPending}
              variant="contained"
              color="success"
              type="submit"
            >
              Qoʻshish
            </Button>
          ) : (
            <Button
              disabled={createTeacher.isPending}
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
      {/* {createTeacher.isPending && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.modal + 1 }}
          open={isLoading}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
    </>
  );
}
export default memo(InputTeacherItem);
