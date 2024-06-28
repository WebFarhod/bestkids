/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IProgram } from "../../types/programType";

// import { fCurrency } from "../../utils/format-number";
import { IconButton, MenuItem, Popover } from "@mui/material";
import { useEffect, useState } from "react";
import Iconify from "../../components/admin/iconify";
import { useProgramStore } from "../../store/admin/program";
import { imagePath } from "../../utils/file-path";
import { LuImageOff } from "react-icons/lu";
import DeleteProgramModal from "./delete-item-modal/deleteProgramModal";

interface IProps {
  data: IProgram;
}
export default function ShopProgramCard({ data }: IProps) {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [dOpen, setdOpen] = useState<boolean>(false);
  const [image, setImage] = useState("");

  const setData = useProgramStore((state) => state.setProgramDetail);
  const setModalInfo = useProgramStore((state) => state.setModalInfo);
  const setModalType = useProgramStore((state) => state.setModalType);
  const setModal = useProgramStore((state) => state.setModal);

  const newData: IProgram = {
    _id: data._id,
    image: data.image,
    name: data.name,
    description: data.description,
    about: data.about,
    type: data.type,
    price: data.price,
    infos: data.infos,
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };
  const renderImg =
    image == "" ? (
      <Box
        component="div"
        // alt={data.name}
        // src={image}
        sx={{
          top: 0,
          width: 1,
          height: 1,
          // objectFit: "cover",
          position: "absolute",
          cursor: "pointer",
          borderRadius: "0",
          fontSize: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          setData(newData);
          // setModalType("update");
          setModalInfo(true);
          // handleCloseMenu();
        }}
      >
        <LuImageOff />
      </Box>
    ) : (
      <Box
        component="img"
        alt={data.name}
        src={image}
        sx={{
          top: 0,
          width: 1,
          height: 1,
          objectFit: "cover",
          position: "absolute",
          cursor: "pointer",
          borderRadius: "0",
        }}
        onClick={() => {
          setData(newData);
          // setModalType("update");
          setModalInfo(true);
          // handleCloseMenu();
        }}
      />
    );

  const renderPrice = (
    <>
      <Typography>dastur narxi</Typography>
      <Typography variant="subtitle1">
        &nbsp;
        {/* {fCurrency(Number(data.price))} */}
        {data.price} soʻm
      </Typography>
    </>
  );

  useEffect(() => {
    // if (typeof data.teacher === "string") {
    //   getTeacherData(data.teacher);
    // }
    setImage(imagePath(data.image));
  }, [data.image]);

  return (
    <>
      <Card>
        <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box>

        <Stack spacing={2} sx={{ p: 3, pl: 2, pr: 0 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              color="inherit"
              component="button"
              underline="hover"
              variant="subtitle1"
              display="flex"
              justifyContent="start"
              noWrap
              onClick={() => {
                setData(newData);
                // setModalType("update");
                setModalInfo(true);
                // handleCloseMenu();
              }}
            >
              {data.name}
            </Link>
            <IconButton onClick={handleOpenMenu}>
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
            <Popover
              open={!!open}
              anchorEl={open}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: { width: 140 },
              }}
            >
              <MenuItem
                onClick={() => {
                  setData(data);
                  setModalType("update");
                  setModal(true);
                  handleCloseMenu();
                }}
              >
                <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
                Tahrirlash
              </MenuItem>

              <MenuItem
                onClick={
                  // handleCloseMenu
                  () => {
                    setOpen(null);
                    setdOpen(true);
                  }
                }
                sx={{ color: "error.main" }}
              >
                <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
                Oʻchirish
              </MenuItem>
            </Popover>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ pr: 2 }}
            // sx={{ backgroundColor: "red" }}
          >
            {/* <Stack
              direction="row"
              alignItems="center"
              gap={1}
              // justifyContent="space-between"
            >
              <Avatar
                sx={
                  {
                    // width: 56,
                    // height: 56,
                    // borderRadius: 1
                  }
                }
                alt={data.name}
                src={
                  TeacherData?.image ? imagePath(TeacherData.image) : undefined
                }
              />
              <Typography sx={{ textOverflow: "ellipsis" }} variant="body2">
                {`${TeacherData?.name} ${TeacherData?.surname}`}
              </Typography>
            </Stack> */}
            {renderPrice}
          </Stack>
        </Stack>
      </Card>
      <DeleteProgramModal
        open={dOpen}
        setOpen={setdOpen}
        id={data._id ? data._id : ""}
      />
    </>
  );
}
