/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useDeleteTeacher } from "../../../service/query/teacher/teacherMutations";
// import { useDeleteTeacher } from "../../../../service/query/teacher/teacherMutations";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string | string[];
}

export default function DeleteModal({ open, setOpen, id }: IProps) {
  const deleteTeacher = useDeleteTeacher();
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        maxWidth={"xs"}
        keepMounted
        aria-describedby="alert-dialog-slide-teacher"
      >
        <DialogTitle>{"Haqiqatan ham oʻchirib tashlamoqchimisiz?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-teacher">
            Foydalanuvchini o'chirish orqali ushbu foydalanuvchiga tayinlangan
            barcha vazifalar ham o'chiriladi.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setOpen(false)}>
            Bekor qilish
          </Button>
          <Button
            color="error"
            onClick={async () => {
              deleteTeacher.mutateAsync(id);
              setOpen(false);
            }}
          >
            Oʻchirish
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
