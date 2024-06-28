import { Box, IconButton, MenuItem, Popover } from "@mui/material";
import { useState } from "react";

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "/assets/icons/ic_flag_en.svg",
  },
  {
    value: "de",
    label: "German",
    icon: "/assets/icons/ic_flag_de.svg",
  },
  {
    value: "fr",
    label: "French",
    icon: "/assets/icons/ic_flag_fr.svg",
  },
];

export default function LanguagePopover() {
  const [item, setItem] = useState(0);
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const selectItem = (value: number) => {
    setItem(value);
    handleClose();
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: "action.selected",
          }),
        }}
      >
        <img src={LANGS[item].icon} alt={LANGS[item].label} />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option, index) => (
          <MenuItem
            key={option.value}
            selected={option.value === LANGS[item].value}
            onClick={() => selectItem(index)}
            sx={{ typography: "body2", py: 1 }}
          >
            <Box
              component="img"
              alt={option.label}
              src={option.icon}
              sx={{ width: 28, mr: 2 }}
            />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
