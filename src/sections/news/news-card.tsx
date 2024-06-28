import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { fDate } from "../../utils/format-time";
import { fShortenNumber } from "../../utils/format-number";
import Iconify from "../../components/admin/iconify";
// import { INews } from "../../interface";
import { FC, useState } from "react";
import { INew } from "../../types/newType";
import { imagePath } from "../../utils/file-path";
import { IconButton, MenuItem, Popover } from "@mui/material";
import { useNewStore } from "../../store/admin/new";
import DeleteNewModal from "./delete-item-modal/deleteNewModal";
import { useComments } from "../../service/query/comment/commentQuery";
// ----------------------------------------------------------------------
interface IProps {
  post: INew;
  index: number;
}

const NewsCard: FC<IProps> = ({ post, index }) => {
  const commentQuery = useComments(post._id || "");
  const comment = commentQuery.data;

  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [dOpen, setdOpen] = useState<boolean>(false);

  const setData = useNewStore((state) => state.setNewDetail);
  const setModalInfo = useNewStore((state) => state.setModalInfo);
  const setModalType = useNewStore((state) => state.setModalType);
  const setModal = useNewStore((state) => state.setModal);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const latestPostLarge = index === 0;

  const latestPost = index === 1 || index === 2;

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        cursor: "pointer",
        height: 44,
        overflow: "hidden",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        ...(latestPostLarge && { typography: "h5", height: 60 }),
        ...((latestPostLarge || latestPost) && {
          color: "common.white",
        }),
      }}
      onClick={() => {
        setData(post);
        setModalInfo(true);
      }}
    >
      {post?.title}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1.5}
      justifyContent="flex-end"
      alignItems="center"
      sx={{
        mt: 3,
        color: "text.disabled",
      }}
    >
      {[
        {
          number: comment?.length,
          icon: "eva:message-circle-fill",
        },
        { number: post?.views ? post.views : 0, icon: "eva:eye-fill" },
        // { number: share, icon: "eva:share-fill" },
      ].map((info, _index) => (
        <Stack
          key={_index}
          direction="row"
          sx={{
            ...((latestPostLarge || latestPost) && {
              opacity: 0.48,
              color: "common.white",
            }),
          }}
        >
          <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
          <Typography variant="caption">
            {fShortenNumber(info?.number || 0)}
          </Typography>
        </Stack>
      ))}

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
              setData(post);
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
    </Stack>
  );

  const renderCover = (
    <Box
      component="img"
      alt={post?.title}
      src={imagePath(post?.image)}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: "text.disabled",
        ...((latestPostLarge || latestPost) && {
          opacity: 0.48,
          color: "common.white",
        }),
      }}
    >
      {post?.createdAt
        ? fDate(new Date(post.createdAt), "dd / MM / yyyy")
        : "Invalid Date"}
    </Typography>
  );

  return (
    <>
      <Grid xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
        <Card>
          <Box
            sx={{
              position: "relative",
              pt: "calc(100% * 3 / 4)",
              ...((latestPostLarge || latestPost) && {
                pt: "calc(100% * 4 / 3)",
                "&:after": {
                  top: 0,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                },
              }),
              ...(latestPostLarge && {
                pt: {
                  xs: "calc(100% * 4 / 3)",
                  sm: "calc(100% * 3 / 4.66)",
                },
              }),
            }}
          >
            {/* {renderShape}

          {renderAvatar} */}

            {renderCover}
          </Box>

          <Box
            sx={{
              p: (theme) => theme.spacing(4, 0, 3, 3),
              ...((latestPostLarge || latestPost) && {
                width: 1,
                bottom: 0,
                position: "absolute",
              }),
            }}
          >
            {renderDate}

            {renderTitle}

            {renderInfo}
          </Box>
        </Card>
      </Grid>
      <DeleteNewModal
        open={dOpen}
        setOpen={setdOpen}
        id={post._id ? post._id : ""}
      />
    </>
  );
};
export default NewsCard;
