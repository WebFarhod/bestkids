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
import { useDeleteOption } from "../../../service/query/option/optionMutations";

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
  id: string;
}

export default function DeleteOptionModal({ open, setOpen, id }: IProps) {
  const deleteOption = useDeleteOption();
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
            O'chirish orqali ushbu ma'lumotni qayata tiklab bo'lmaydi.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setOpen(false)}>
            Bekor qilish
          </Button>
          <Button
            color="error"
            onClick={async () => {
              deleteOption.mutate(id);
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
