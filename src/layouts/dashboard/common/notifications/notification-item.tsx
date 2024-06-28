/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { IMessage } from "../../../../types/messageType";
import {
  Avatar,
  Badge,
  Checkbox,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Iconify from "../../../../components/admin/iconify";
import { fDate } from "../../../../utils/format-time";
import { success } from "../../../../theme/palette";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: success.main,
    color: success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

interface INotificationItem {
  notification: IMessage;
  setChatDetail: (data: IMessage) => void;
  readMessage: (id: string) => void;
  selected: boolean;
  handleClick: () => void;
}
const NotificationItem: FC<INotificationItem> = ({
  notification,
  setChatDetail,
  readMessage,
  selected,
  handleClick,
}) => {
  const { avatar, title } = renderContent(notification);

  return (
    <Stack
      direction="row"
      sx={{
        // ...(notification.isUnRead && {
        //   bgcolor: "action.selected",
        // }),
        ":hover": {
          bgcolor: "rgba(145, 158, 171, 0.08)",
        },
      }}
    >
      <Checkbox disableRipple checked={selected} onChange={handleClick} />
      <ListItemButton
        sx={{
          py: 1.5,
          px: 0,
          mt: "1px",
          ":hover": {
            bgcolor: "unset",
          },
        }}
        onClick={() => {
          setChatDetail(notification);
          readMessage(notification?._id || "");
        }}
      >
        <ListItemAvatar>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            invisible={!notification.isUnRead}
          >
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
          </StyledBadge>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: "flex",
                alignItems: "center",
                color: "text.disabled",
              }}
            >
              <Iconify
                icon="eva:clock-outline"
                sx={{ mr: 0.5, width: 16, height: 16 }}
              />
              {/* {fToNow(new Date(notification?.createdAt || 0))} */}

              {fDate(
                new Date(notification?.createdAt || 0),
                "hh:mm dd/MM/yyyy"
              )}
            </Typography>
          }
        />
      </ListItemButton>
    </Stack>
  );
};

export default NotificationItem;

type NotificationType = "proposition" | "order_shipped" | "comment";

// Type guard function to check if a string is a valid notification type
function isNotificationType(type: any): type is NotificationType {
  return ["proposition", "order_shipped", "comment"].includes(type);
}

interface RenderContentResult {
  avatar: JSX.Element;
  title: JSX.Element;
}
// The renderContent function
function renderContent(notification: IMessage): RenderContentResult {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        display="block"
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
        noWrap
      >
        {/* &nbsp; {notification.body} */}
      </Typography>
    </Typography>
  );

  const avatars: { [key in NotificationType]: string } = {
    proposition: "/assets/icons/ic_notification_mail.svg",
    // : "/assets/icons/ic_notification_package.svg",
    order_shipped: "/assets/icons/ic_notification_shipping.svg",
    comment: "/assets/icons/ic_notification_chat.svg",
  };

  const avatarSrc = isNotificationType(notification.type)
    ? avatars[notification.type]
    : undefined;

  if (avatarSrc) {
    return {
      avatar: <img alt={notification.title} src={avatarSrc} />,
      title,
    };
  }

  return {
    avatar: <></>,
    title,
  };
}
