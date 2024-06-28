/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  LinearProgress,
  List,
  ListSubheader,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Iconify from "../../../../components/admin/iconify";
import Scrollbar from "../../../../components/admin/scrollbar";
import { IMessage } from "../../../../types/messageType";

import { useMessages } from "../../../../service/query/message/mesageQuery";
import NotificationItem from "./notification-item";
import {
  useDeleteMessage,
  useReadAllMessage,
  useReadMessage,
} from "../../../../service/query/message/messageMutations";
import NotificationProposition from "./notification-proposition";
import NotificationComment from "./notification-comment";

export default function NotificationsPopover() {
  //query
  const dataQuery = useMessages();
  const NOTIFICATIONS = dataQuery.data || [];
  const readAllMessage = useReadAllMessage();
  const readMessage = useReadMessage();
  const deleteMessage = useDeleteMessage();

  //state
  const [notifications, setNotifications] = useState<IMessage[] | []>(
    NOTIFICATIONS
  );

  const [markingAsRead, setMarkingAsRead] = useState<boolean>(false);

  const totalUnRead =
    notifications?.filter((item: IMessage) => item.isUnRead === true).length ||
    0;

  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [viewOpen, setViewOpen] = useState<boolean>(false);
  const [chatDetail, setChatDetail] = useState<IMessage | null>(null);

  const [selected, setSelected] = useState<string[]>([]);
  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = NOTIFICATIONS?.map((n) => n._id || "");
      setSelected(newSelecteds);
      return;
    } else {
      setSelected([]);
    }
  };

  const handleClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  // const chatDetail = useChatStore((state) => state.chatDetail);
  // const setChatDetail = useChatStore((state) => state.setChatDetail);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleViewOpen = () => {
    setViewOpen(true);
  };
  const handleViewClose = () => {
    setViewOpen(false);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setMarkingAsRead(true);
    readAllMessage.mutate();
  };
  useEffect(() => {
    setNotifications(NOTIFICATIONS);
  }, [NOTIFICATIONS]);
  useEffect(() => {
    if (readAllMessage.status == "pending") {
      setMarkingAsRead(true);
    } else if (readAllMessage.status == "success") {
      setMarkingAsRead(false);
    }
    if (deleteMessage.isPending) {
      setMarkingAsRead(true);
    } else if (deleteMessage.isSuccess) {
      setMarkingAsRead(false);
    }
    setSelected([]);
  }, [readAllMessage.status, NOTIFICATIONS, deleteMessage.status]);
  // useEffect(() => setNotifications(NOTIFICATIONS), [NOTIFICATIONS]);

  const renderHeader = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 2,
        px: 2.5,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">Xabarlar</Typography>
        {totalUnRead == 0 ? (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Sizda oʻqilmagan xabar mavjud emas
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Sizda {totalUnRead} ta oʻqilmagan xabar bor
          </Typography>
        )}
      </Box>

      {!markingAsRead && totalUnRead > 0 && (
        <Tooltip title="Hammasini o'qilgan deb belgilang">
          <IconButton color="primary" onClick={handleMarkAllAsRead}>
            <Iconify icon="eva:done-all-fill" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );

  const renderProgress = markingAsRead && (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );

  const renderControlPanel = (
    <Stack direction="row" sx={{ pr: 2.5 }}>
      <Checkbox
        indeterminate={
          selected.length > 0 && selected.length < NOTIFICATIONS.length
        }
        checked={
          NOTIFICATIONS.length > 0 && selected.length === NOTIFICATIONS.length
        }
        onChange={handleSelectAllClick}
      />
      {selected.length > 0 ? (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography
            // component="div"
            variant="subtitle1"
            sx={{
              height: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            {selected.length} tanlangan
          </Typography>
          <Tooltip title="Oʻchirish">
            <IconButton
              color="error"
              onClick={() => {
                deleteMessage.mutateAsync(selected);
              }}
              sx={{
                bgcolor: " rgba(255, 86, 48, 0.1)",
                "&hover":{
                  bgcolor: " rgba(255, 86, 48, 0.4)",
                }
              }}
            >
              <Iconify icon="eva:trash-2-fill" />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : (
        <Typography
          variant="subtitle1"
          sx={{
            height: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          Barchasini belgilash
        </Typography>
      )}
    </Stack>
  );

  const renderLine = <Divider sx={{ borderStyle: "dashed" }} />;

  const renderAllList = (
    <Scrollbar sx={{ height: { xs: 340, sm: 600 } }}>
      <List
        disablePadding
        subheader={
          <ListSubheader
            disableSticky
            sx={{ py: 1, px: 2.5, typography: "overline" }}
          >
            Barcha xabarlar
          </ListSubheader>
        }
      >
        {notifications
          .sort((a: IMessage, b: IMessage) => {
            const createdAtA = a.createdAt
              ? new Date(a.createdAt).getTime()
              : 0;
            const createdAtB = b.createdAt
              ? new Date(b.createdAt).getTime()
              : 0;
            return createdAtB - createdAtA;
          })
          .map((notification: IMessage) => (
            <NotificationItem
              key={notification?._id}
              notification={notification}
              setChatDetail={setChatDetail}
              readMessage={(id: string) => {
                id !== "" && readMessage.mutate(id);
              }}
              selected={
                selected.indexOf(notification._id ? notification._id : "") !==
                -1
              }
              handleClick={() =>
                handleClick(notification._id ? notification._id : "")
              }
            />
          ))}
      </List>
    </Scrollbar>
  );

  const renderNewAndReadList = (
    <Scrollbar sx={{ height: { xs: 340, sm: 600 } }}>
      <List
        disablePadding
        subheader={
          <ListSubheader
            disableSticky
            sx={{ py: 1, px: 2.5, typography: "overline" }}
          >
            Yangi
          </ListSubheader>
        }
      >
        {notifications
          ?.filter((item) => item.isUnRead === true)
          .sort((a: IMessage, b: IMessage) => {
            const createdAtA = a.createdAt
              ? new Date(a.createdAt).getTime()
              : 0;
            const createdAtB = b.createdAt
              ? new Date(b.createdAt).getTime()
              : 0;
            return createdAtB - createdAtA;
          })
          .slice(0, 2)
          .map((notification: IMessage) => (
            <NotificationItem
              key={notification?._id}
              notification={notification}
              setChatDetail={setChatDetail}
              readMessage={(id: string) => {
                id !== "" && readMessage.mutate(id);
              }}
              selected={
                selected.indexOf(notification._id ? notification._id : "") !==
                -1
              }
              handleClick={() =>
                handleClick(notification._id ? notification._id : "")
              }
            />
          ))}
        {notifications.filter((item) => item.isUnRead === true).length == 0 && (
          <Typography
            variant="caption"
            sx={{
              px: 2.5,
              mt: 1,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            hozircha xabar yo'q
          </Typography>
        )}
        {/* <p>hh</p> */}
      </List>

      <List
        disablePadding
        subheader={
          <ListSubheader
            disableSticky
            sx={{ py: 1, px: 2.5, typography: "overline" }}
          >
            Oʻqilgan xabarlar
          </ListSubheader>
        }
      >
        {notifications
          ?.filter((item) => item.isUnRead === false)
          .sort((a: IMessage, b: IMessage) => {
            const createdAtA = a.createdAt
              ? new Date(a.createdAt).getTime()
              : 0;
            const createdAtB = b.createdAt
              ? new Date(b.createdAt).getTime()
              : 0;
            return createdAtB - createdAtA;
          })
          .slice(0, 6)
          .map((notification) => (
            <NotificationItem
              key={notification?._id}
              notification={notification}
              setChatDetail={setChatDetail}
              readMessage={(id: string) => {
                id !== "" && readMessage.mutate(id);
              }}
              selected={
                selected.indexOf(notification._id ? notification._id : "") !==
                -1
              }
              handleClick={() =>
                handleClick(notification._id ? notification._id : "")
              }
            />
          ))}
      </List>
    </Scrollbar>
  );

  const renderFooterButton = (
    <Box sx={{ p: 1 }}>
      {viewOpen ? (
        <Button fullWidth disableRipple onClick={handleViewClose}>
          Qisqa
        </Button>
      ) : (
        <Button fullWidth disableRipple onClick={handleViewOpen}>
          Toʻliq
        </Button>
      )}
    </Box>
  );

  return (
    <>
      <IconButton color={open ? "primary" : "default"} onClick={handleOpen}>
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify width={24} icon="uim-comment-alt-message" />
        </Badge>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={() => {
          handleClose();
          setTimeout(() => {
            setChatDetail(null);
            setSelected([]);
            setViewOpen(false);
          }, 1000);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
          },
        }}
      >
        {chatDetail !== null ? (
          chatDetail?.type === "proposition" ? (
            <NotificationProposition
              data={chatDetail}
              setChatDetail={setChatDetail}
              deleteMessage={(data: string) => {
                deleteMessage.mutateAsync(data);
              }}
            />
          ) : (
            <>
              <NotificationComment
                data={chatDetail}
                setChatDetail={setChatDetail}
                deleteMessage={(data: string) => {
                  deleteMessage.mutateAsync(data);
                }}
              />
            </>
          )
        ) : (
          <>
            {renderHeader}
            {renderProgress}
            {renderControlPanel}
            {renderLine}
            <>
              {viewOpen ? renderAllList : renderNewAndReadList}
              {renderLine}

              {renderFooterButton}
            </>
          </>
        )}
      </Popover>
    </>
  );
}
