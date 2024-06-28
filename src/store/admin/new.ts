import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { INew } from "../../types/newType";

export const defaultNew: INew = {
  _id: "",
  title: "",
  image: "",
  type: "",
  body: "",
};
interface IProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
  modalInfo: boolean;
  setModalInfo: (modal: boolean) => void;
  modalType: "add" | "update";
  setModalType: (modalType: "add" | "update") => void;
  newDetail: INew;
  setNewDetail: (data: INew) => void;
}

export const useNewStore = create<IProps>()(
  devtools((set) => ({
    modal: false,
    setModal: (modal: boolean) => set({ modal: modal }),
    modalInfo: false,
    setModalInfo: (modal: boolean) => set({ modalInfo: modal }),
    modalType: "add",
    setModalType: (data: "add" | "update") => set({ modalType: data }),
    newDetail: defaultNew,
    setNewDetail: (data: INew) => set({ newDetail: data }),
  }))
);
