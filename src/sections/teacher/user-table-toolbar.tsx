import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import Iconify from "../../components/admin/iconify/iconify";
import { ChangeEvent, useState } from "react";
import DeleteModal from "./deleteItemModal/deleteModal";

interface IProps {
  selected: string[];
  filterName: string;
  onFilterName: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function UserTableToolbar({
  selected,
  filterName,
  onFilterName,
}: IProps) {
  const [dOpen, setdOpen] = useState<boolean>(false);

  return (
    <>
      <Toolbar
        sx={{
          height: 96,
          display: "flex",
          justifyContent: "space-between",
          p: (theme) => theme.spacing(0, 1, 0, 3),
          ...(selected.length > 0 && {
            color: "primary.main",
            bgcolor: "primary.lighter",
          }),
        }}
      >
        {selected.length > 0 ? (
          <Typography component="div" variant="subtitle1">
            {selected.length} tanlangan
          </Typography>
        ) : (
          <OutlinedInput
            value={filterName}
            onChange={onFilterName}
            placeholder="Xodim qidirish.."
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />
        )}

        {selected.length > 0 && (
          <Tooltip title="Delete">
            <IconButton
              onClick={() => {
                setdOpen(true);
              }}
            >
              <Iconify icon="eva:trash-2-fill" />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <DeleteModal open={dOpen} setOpen={setdOpen} id={selected} />
    </>
  );
}
