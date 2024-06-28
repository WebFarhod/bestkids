/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useDeleteClass } from "../../../service/query/class/classesMutations";

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

export default function DeleteClassModal({ open, setOpen, id }: IProps) {
  const deleteProgram = useDeleteClass();
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
            O'chirish orqali ushbu foydalanuvchiga tayinlangan
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
              deleteProgram.mutateAsync(id);
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
