import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  // DialogTitle,
  Fade,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import Scrollbar from "../../components/admin/scrollbar";
import { imagePath } from "../../utils/file-path";
import DeleteNewModal from "./delete-item-modal/deleteNewModal";
import { useNewStore } from "../../store/admin/new";
import "./newsDetail.scss";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
export default function NewsDetail() {
  const open = useNewStore((state) => state.modalInfo);
  const [dOpen, setdOpen] = useState<boolean>(false);
  const setModalInfo = useNewStore((state) => state.setModalInfo);

  // const setData = useNewStore((state) => state.setNewDetail);
  const setModalType = useNewStore((state) => state.setModalType);
  const setModal = useNewStore((state) => state.setModal);
  // const setModalInfo = useProgramStore((state) => state.setModalInfo);
  const data = useNewStore((state) => state.newDetail);
  // console.log("post data", data);
  // const [teacherImage, setTeacherImage] = useState("");

  // console.log("classdata", data);
  // useEffect(() => {
  //   setTeacherImage(imagePath(data.image));
  // }, [data]);
  return (
    <>
      <Dialog
        maxWidth={"md"}
        fullWidth={true}
        open={open}
        onClose={() => {
          setModalInfo(false);
        }}
        TransitionComponent={Transition}
        //   PaperProps={{
        //     component: "form",
        //     onSubmit: handleSubmit(createSubmit),
        //   }}
      >
        {/* <DialogTitle sx={{ paddingY: 3 }}>{data.title}</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText>{data.name}</DialogContentText> */}
          <Grid container spacing={5}>
            <Grid xs={12}>
              <Box
                component="img"
                alt={data?.title}
                src={imagePath(data?.image)}
                sx={{
                  // width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                  width: "856px",
                  height: " 558px",
                }}
              ></Box>
            </Grid>
            <Grid xs={12}>
              <Typography variant="h2">{data?.title}</Typography>
            </Grid>
            <Grid xs={12}>
              <div
                className="new-body"
                dangerouslySetInnerHTML={{ __html: data.body || "" }}
              ></div>
            </Grid>
          </Grid>

          <Scrollbar></Scrollbar>
          {/* <Box sx={{ flexGrow: 1 }}>
            
          </Box> */}
        </DialogContent>
        <DialogActions sx={{ padding: 3 }}>
          <Stack
            width={"100%"}
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 0 }}
            justifyContent="space-between"
            alignItems={{ sm: "center" }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Button
                // disabled={createTeacher.isPending}
                variant="contained"
                color="error"
                type="submit"
                onClick={
                  // handleCloseMenu
                  () => {
                    setdOpen(true);
                    setModalInfo(false);
                  }
                }
              >
                Oʻchirish
              </Button>
              <Button
                // disabled={createTeacher.isPending}
                variant="contained"
                color="success"
                type="button"
                onClick={() => {
                  // setData({
                  //   ...data,
                  //   teacher: (data.teacher as ITeacher)?._id || data.teacher,
                  // });
                  setModalType("update");
                  setModal(true);
                  setModalInfo(false);
                }}
              >
                Tahrirlash
              </Button>
            </Stack>
            <Stack>
              <Button
                color="error"
                variant="outlined"
                onClick={() => {
                  setModalInfo(false);
                }}
              >
                Yopish
              </Button>
            </Stack>
          </Stack>
        </DialogActions>
      </Dialog>
      <DeleteNewModal
        open={dOpen}
        setOpen={setdOpen}
        id={data._id ? data._id : ""}
      />
    </>
  );
}
