export interface IMessage {
  createdAt?: number;
  isUnRead?: boolean;
  messageId?: string;
  title?: string;
  type?: "proposition" | "order_placed" | "order_shipped" | "chat_message";
  user?: string;
  _id?: string;
}
