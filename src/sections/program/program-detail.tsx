import {
  // Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  // DialogContentText,
  DialogTitle,
  Divider,
  Fade,
  // Paper,
  Stack,
  Typography,
  // styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";
import { useProgramStore } from "../../store/admin/program";
import Scrollbar from "../../components/admin/scrollbar";
import { imagePath } from "../../utils/file-path";
import { LuImageOff } from "react-icons/lu";
import DeleteProgramModal from "./delete-item-modal/deleteProgramModal";

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
export default function ProgramDetail() {
  const [image, setImage] = useState("");
  const [dOpen, setdOpen] = useState<boolean>(false);

  const setData = useProgramStore((state) => state.setProgramDetail);
  const setModalType = useProgramStore((state) => state.setModalType);
  const setModal = useProgramStore((state) => state.setModal);
  const open = useProgramStore((state) => state.modalInfo);
  const setModalInfo = useProgramStore((state) => state.setModalInfo);
  const data = useProgramStore((state) => state.programDetail);

  const renderImage = (
    <Grid xs={12} md={6}>
      {image == "" ? (
        <Box
          component="div"
          sx={{
            width: 1,
            height: 1,
            cursor: "pointer",
            fontSize: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LuImageOff />
        </Box>
      ) : (
        <Box
          component="img"
          alt={data.name}
          src={imagePath(data.image)}
          sx={{
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
      )}
    </Grid>
  );

  const renderDesc = (
    <Typography variant="subtitle1">{data.description}</Typography>
  );

  const renderAbout = (
    <Typography
      variant="body1"
      className="search-p"
      dangerouslySetInnerHTML={{ __html: data.about || "" }}
    />
  );

  const renderInfo = (
    <Stack spacing={2}>
      <Divider>
        <Chip label="Ma'lumotlar" size="small" />
      </Divider>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={1}
        divider={<Divider key={data._id} orientation="vertical" flexItem />}
      >
        {data.infos?.map((info, index) => (
          <Stack
            key={index}
            // direction="row"
            // justifyContent="space-evenly"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="subtitle1">{info.name}</Typography>
            <Typography variant="body1">{info.info}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );

  useEffect(() => {
    setImage(imagePath(data.image));
  }, [data]);
  return (
    <>
      <Dialog
        maxWidth={"xl"}
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
        <DialogTitle sx={{ paddingY: 3 }}>{data.name}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>{data.name}</DialogContentText> */}
          <Grid container spacing={5}>
            {renderImage}
            <Grid xs={12} md={6}>
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={5}
                height={"100%"}
              >
                <Stack spacing={5}>
                  <Stack spacing={2}>
                    {renderDesc}

                    {renderAbout}
                  </Stack>
                  {renderInfo}
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ pr: 5 }}
                >
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="body2">Dastur narxi</Typography>
                    <Typography variant="subtitle1">
                      {data.price} soʻm
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant="body2">Kategoriya</Typography>
                    <Typography variant="subtitle1">{data.type}</Typography>
                  </Stack>
                </Stack>
              </Stack>
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
                  setData(data);
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
      <DeleteProgramModal
        open={dOpen}
        setOpen={setdOpen}
        id={data._id ? data._id : ""}
      />
    </>
  );
}
