import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Iconify from "../../components/admin/iconify";
import { FC, useState } from "react";
import { imagePath } from "../../utils/file-path";
import { Button, IconButton, MenuItem, Popover, Rating } from "@mui/material";
import { IOption } from "../../types/optionType";
import { useOptionStore } from "../../store/admin/option";
import DeleteOptionModal from "./delete-item-modal/delete-option-modal";
// ----------------------------------------------------------------------
interface IProps {
  data: IOption;
}

const OptionsCard: FC<IProps> = ({ data }) => {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [dOpen, setdOpen] = useState<boolean>(false);

  const setData = useOptionStore((state) => state.setOptionDetail);
  const setModalType = useOptionStore((state) => state.setModalType);
  const setModal = useOptionStore((state) => state.setModal);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const renderCover = (
    <Box
      component="img"
      alt={data?.user}
      src={imagePath(data?.image)}
      sx={{
        objectFit: "cover",
        borderRadius: 2,
        width: "200px",
        height: "200px",
      }}
      onClick={() => {
        setData(data);
      }}
    />
  );

  const renderDate = (
    <Stack direction="row" alignItems="start">
      <Stack
        height={"100%"}
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
      >
        <Typography variant="subtitle1" component="div">
          {data?.user}
        </Typography>
        <Stack>
          <Typography variant="body1">{data?.body}</Typography>
        </Stack>
        <Rating
          name="half-rating-read"
          defaultValue={data.rating}
          precision={0.5}
          readOnly
        />
      </Stack>
      <Button>
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
      </Button>
    </Stack>
  );

  return (
    <>
      <Card sx={{ my: 3,p:2 }}>
        <Stack
          direction="row"
          spacing={3}
        >
          {renderCover}

          {renderDate}
        </Stack>
      </Card>
      {/* </Grid> */}
      <DeleteOptionModal
        open={dOpen}
        setOpen={setdOpen}
        id={data._id ? data._id : ""}
      />
    </>
  );
};
export default OptionsCard;
