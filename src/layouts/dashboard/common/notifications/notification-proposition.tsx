/* eslint-disable react-refresh/only-export-components */
import { Box, Button, Stack, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";

import DeleteIcon from "@mui/icons-material/Delete";

import Scrollbar from "../../../../components/admin/scrollbar";
import { fDate } from "../../../../utils/format-time";
import { FC, memo } from "react";
import { IMessage } from "../../../../types/messageType";
import { useContact } from "../../../../service/query/contact/contactQuery";

interface IProps {
  data: IMessage | null;
  setChatDetail: (data: IMessage | null) => void;
  deleteMessage: (data: string) => void;
}

const NotificationProposition: FC<IProps> = ({
  data,
  setChatDetail,
  deleteMessage,
}) => {
  const dataQuery = useContact(data?.messageId || "");
  const propositionData = dataQuery.data;

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
          <Typography variant="subtitle1">{propositionData?.user}</Typography>
          <Typography variant="caption">{propositionData?.number}</Typography>
        </Stack>
      </Box>
      <Scrollbar sx={{ height: { xs: 340, sm: 590 }, px: 2.5 }}>
        <Typography variant="body2" align="center" pb={2}>
          {fDate(new Date(propositionData?.createdAt || 0), "hh:mm dd/MM/yyyy")}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {propositionData?.body}
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
            deleteMessage(data?._id || "");
            setChatDetail(null);
          }}
        >
          Oʻchirish
        </Button>
      </Stack>
    </>
  );
};

export default memo(NotificationProposition);
