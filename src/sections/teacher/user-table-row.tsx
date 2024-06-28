import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Iconify from "../../components/admin/iconify/iconify";
// import DeleteModal from "./teacher/deleteItemModal/deleteModal";
import { ITeacher } from "../../types/teacherType";
import { useTeacherStore } from "../../store/admin/teacher";
import { imagePath } from "../../utils/file-path";
import DeleteModal from "./deleteItemModal/deleteModal";

interface IProps {
  data: ITeacher;
  selected: boolean;
  handleClick: () => void;
}

export default function UserTableRow({ data, selected, handleClick }: IProps) {
  const setData = useTeacherStore((state) => state.setTeacherDetail);
  const setModal = useTeacherStore((state) => state.setModal);
  const setModalType = useTeacherStore((state) => state.setModalType);
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [dOpen, setdOpen] = useState<boolean>(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>
        <TableCell>
          {
            <Avatar
              sx={{
                width: 56,
                height: 56,
                // borderRadius: 1
              }}
              alt={data.name}
              src={imagePath(data.image)}
            />
          }
        </TableCell>
        <TableCell component="th" scope="row">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {data.name + " " + data.surname}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{data.rank}</TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>
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
      <DeleteModal
        open={dOpen}
        setOpen={setdOpen}
        id={data._id ? data._id : ""}
      />
    </>
  );
}
