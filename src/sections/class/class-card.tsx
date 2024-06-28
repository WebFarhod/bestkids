/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Card,
  IconButton,
  Link,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";

// import { fCurrency } from "../../utils/format-number";
import { useState } from "react";
import Iconify from "../../components/admin/iconify";
import { useClassStore } from "../../store/admin/class";
import { imagePath } from "../../utils/file-path";
import { LuImageOff } from "react-icons/lu";
import DeleteClassModal from "./delete-item-modal/deleteClassModal";
import SvgColor from "../../components/admin/svg-color";
// import DeleteProgramModal from "../program/delete-item-modal/deleteProgramModal";
// import DeleteProgramModal from "./delete-item-modal/deleteProgramModal";

import shape from "../../../public/assets/icons/shape-avatar.svg";
import { IClass, IClassTeacher } from "../../types/classType";
interface IProps {
  data: IClass;
}
export default function ClassCard({ data }: IProps) {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [dOpen, setdOpen] = useState<boolean>(false);
  // const [TeacherData, setTeacherData] = useState<ITeacher>();
  // const [image, setImage] = useState("");

  const setData = useClassStore((state) => state.setClassDetail);
  const setModalInfo = useClassStore((state) => state.setModalInfo);
  const setModalType = useClassStore((state) => state.setModalType);
  const setModal = useClassStore((state) => state.setModal);

  // const getTeacherData = async (id: string) => {
  //   setTeacherData(await TeacherService.getTeacherData(id));
  // };
  // const newData = data;
  // const newData = { ...data, teacher: TeacherData || "" };
  // const newData: IClass = {
  //   image: data.image,
  //   name: data.name,
  //   description: data.description,
  //   about: data.about,
  //   type: data.type,
  //   price: data.price,
  //   infos: data.infos,
  //   teacher: TeacherData || "",
  // };

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const renderPrice = (
    <Typography variant="subtitle2" align="right" pr={2}>
      &nbsp;
      {/* {fCurrency(Number(data.price))} */}
      {data.price}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src={shape}
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: "absolute",
        color: "background.paper",
      }}
    />
  );

  const renderAvatar = (
    <Avatar
      alt={data.name}
      src={
        (data.teacher as IClassTeacher)?.image
          ? imagePath((data.teacher as IClassTeacher)?.image)
          : undefined
      }
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: "absolute",
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
      }}
    />
  );

  const renderCover =
    data.image == "" ? (
      <Box
        component="div"
        sx={{
          top: 0,
          width: 1,
          height: 1,
          objectFit: "cover",
          position: "absolute",
        }}
        onClick={() => {
          setData(data);
          setModalInfo(true);
        }}
      >
        <LuImageOff />
      </Box>
    ) : (
      <Box
        component="img"
        alt={data.name}
        src={imagePath(data?.image)}
        sx={{
          top: 0,
          width: 1,
          height: 1,
          objectFit: "cover",
          position: "absolute",
        }}
        onClick={() => {
          setData(data);
          setModalInfo(true);
        }}
      />
    );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle1"
      underline="hover"
      sx={{
        height: 44,
        overflow: "hidden",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
      }}
      noWrap
      onClick={() => {
        setData(data);
        // setModalType("update");
        setModalInfo(true);
        // handleCloseMenu();
      }}
    >
      {data.name}
    </Link>
  );

  const renderPopover = (
    <>
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
    </>
  );

  const renderName = (
    <Typography sx={{ textOverflow: "ellipsis" }} variant="body2">
      {`${(data.teacher as IClassTeacher)?.name} ${
        (data.teacher as IClassTeacher)?.surname
      }`}
    </Typography>
  );

  // useEffect(() => {
  //   if (typeof data.teacher === "string") {
  //     getTeacherData(data.teacher);
  //   }
  //   setImage(imagePath(data?.image));
  // }, [data]);

  return (
    <>
      <Card>
        {/* <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box> */}
        <Box
          sx={{
            position: "relative",
            pt: "calc(100% * 3 / 4)",
          }}
        >
          {renderShape}

          {renderAvatar}

          {renderCover}
        </Box>
        <Box
          sx={{
            p: (theme) => theme.spacing(3, 1, 3, 3),
          }}
        >
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {renderName}

              {renderPopover}
            </Stack>
            {renderTitle}
            {renderPrice}
          </Stack>
          {/* {renderDate}


          {renderInfo} */}
        </Box>
        {/* <Stack spacing={2} sx={{ p: 3, pl: 2, pr: 0 }}>
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
            
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ pr: 1.5 }}
            // sx={{ backgroundColor: "red" }}
          >
            <Stack
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
            </Stack>
            {renderPrice}
          </Stack>
        </Stack> */}
      </Card>
      <DeleteClassModal
        open={dOpen}
        setOpen={setdOpen}
        id={data._id ? data._id : ""}
      />
    </>
  );
}
