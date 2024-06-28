/* eslint-disable react-refresh/only-export-components */
import { Box, Button, Stack, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";

import DeleteIcon from "@mui/icons-material/Delete";

// import AddIcon from "@mui/icons-material/Add";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";

import Scrollbar from "../../../../components/admin/scrollbar";
import { fDate } from "../../../../utils/format-time";
import { FC, memo } from "react";
import { IMessage } from "../../../../types/messageType";
// import { useContact } from "../../../../service/query/contact/contactQuery";
import { useComment } from "../../../../service/query/comment/commentQuery";
import { useApprovedContact } from "../../../../service/query/comment/commentMutations";
// import { IContact } from "../../../../types/contactType";

interface IProps {
  data: IMessage | null;
  setChatDetail: (data: IMessage | null) => void;
  deleteMessage: (data: string) => void;
}

const NotificationComment: FC<IProps> = ({
  data,
  setChatDetail,
  // deleteMessage,
}) => {
  const dataQuery = useComment(data?.messageId || "");
  const commentData = dataQuery.data;
  const approvedContact = useApprovedContact();
  return (
    <>
      {}
      <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
        <Button
          onClick={() => {
            setChatDetail(null);
          }}
        >
          <FaArrowLeft />
        </Button>
        <Stack>
          <Typography variant="subtitle1">{commentData?.user}</Typography>
          <Typography variant="caption">{commentData?.number}</Typography>
        </Stack>
      </Box>
      <Scrollbar sx={{ height: { xs: 340, sm: 590 }, px: 2.5 }}>
        <Typography variant="body2" align="center" pb={2}>
          {fDate(new Date(commentData?.createdAt || 0), "hh:mm dd/MM/yyyy")}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {commentData?.body}
        </Typography>
      </Scrollbar>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        m={2}
        mx={2.5}
      >
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => {
            // deleteMessage(chatDetail?._id || "");
            // deleteMessage.mutateAsync(chatDetail?._id || "");
            setChatDetail(null);
          }}
        >
          Oʻchirish
        </Button>
        {commentData?.isApproved ? (
          <Button
            disabled
            variant="text"
            endIcon={<DoneAllIcon />}
            onClick={() => {
              approvedContact.mutate(commentData?._id || "");
            }}
          >
            Tasdiqlangan
          </Button>
        ) : (
          <Button
            variant="outlined"
            endIcon={<DoneIcon />}
            onClick={() => {
              approvedContact.mutate(commentData?._id || "");
            }}
          >
            Tasdiqlangash
          </Button>
        )}
      </Stack>
    </>
  );
};

export default memo(NotificationComment);
