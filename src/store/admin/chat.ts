import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IMessage } from "../../types/messageType";

export const defaultClass: IMessage = {};
interface IProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
  chatDetail: IMessage;
  setChatDetail: (data: IMessage) => void;
}

export const useChatStore = create<IProps>()(
  devtools((set) => ({
    modal: false,
    setModal: (modal: boolean) => set({ modal: modal }),
    chatDetail: defaultClass,
    setChatDetail: (data: IMessage) => set({ chatDetail: data }),
  }))
);
