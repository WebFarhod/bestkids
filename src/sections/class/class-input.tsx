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

import { IClass } from "../../types/classType";
import { defaultClass, useClassStore } from "../../store/admin/class";
import {
  useCreatClass,
  useUpdateClass,
} from "../../service/query/class/classesMutations";
import InputClassImage from "./class-input-item/input-class-image";
import InputClassTeacher from "./class-input-item/input-class-teacher";
import { InputClassData } from "./class-input-item/input-class-data";
import { InputClassAbout } from "./class-input-item/input-class-about";
import InputClassDescription from "./class-input-item/input-class-description";
// import InputClassInfo from "./class-input-item/input-class-info";
import InputClassType from "./class-input-item/input-class-type";

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
  type: yup.string().required("tur kiriting"),
  // price: yup.string().required("narx kiriting"),
  // infos: yup.array().of(
  //   yup.object({
  //     name: yup.string(),
  //     info: yup.string(),
  //   })
  // ),
  teacher: yup.string().required("tarbiyachi kiriting"),
});

export type ClassFieldType =
  | "image"
  | "name"
  | "description"
  | "about"
  | "type"
  | "price"
  | "infos"
  | "teacher";

function ClassInput() {
  const open = useClassStore((state) => state.modal);
  const setOpen = useClassStore((state) => state.setModal);
  const ClassData = useClassStore((state) => state.classDetail);
  const setClassData = useClassStore((state) => state.setClassDetail);
  const modalType = useClassStore((state) => state.modalType);

  //react query
  const createClass = useCreatClass();
  const updateClass = useUpdateClass();

  const {
    handleSubmit,
    // watch,
    control,
    reset,
    formState: { errors },
    trigger,
    setValue,
    getValues,
  } = useForm<IClass>({
    defaultValues: ClassData && ClassData,
    resolver: yupResolver(schema),
  } as unknown as UseFormProps<IClass>);

  const createSubmit: SubmitHandler<IClass> = (data) => {
    createClass.mutate(data);
    setOpen(false);
  };

  const updateSubmit: SubmitHandler<IClass> = async (data) => {
    const isValid = await trigger();
    isValid && (updateClass.mutate(data), setOpen(false));
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
              <InputClassImage setValue={setValue} getValues={getValues} />
            </Grid>
            <Grid xs={12} md={6}>
              <Grid>
                <InputClassData
                  name="name"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid>
                <InputClassDescription
                  name="description"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid>
                <InputClassTeacher
                  name="teacher"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
              <Grid>
                <InputClassType
                  name="type"
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </Grid>
            </Grid>
            <Grid xs={12}>
              <InputClassAbout
                name="about"
                control={control}
                errors={errors}
                trigger={trigger}
              />
            </Grid>
            {/* <Grid xs={12}>
              <InputClassType
                name="type"
                control={control}
                errors={errors}
                trigger={trigger}
              />
            </Grid> */}
          </Grid>
          {/* </Box> */}
        </DialogContent>
        <DialogActions sx={{ mr: 6 }}>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              setClassData(defaultClass);
              setOpen(false);
            }}
          >
            Bekor qilish
          </Button>
          {modalType === "add" ? (
            <Button
              disabled={createClass.isPending}
              variant="contained"
              color="success"
              type="submit"
            >
              Qoʻshish
            </Button>
          ) : (
            <Button
              disabled={createClass.isPending}
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
export default memo(ClassInput);
