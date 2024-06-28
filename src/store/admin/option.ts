import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IOption } from "../../types/optionType";

export const defaultOption: IOption = {
  _id: "",
  image: "",
  user: "",
  rating: 0,
  body: "",
};

interface IProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
  // modalInfo: boolean;
  // setModalInfo: (modal: boolean) => void;
  modalType: "add" | "update";
  setModalType: (modalType: "add" | "update") => void;
  optionDetail: IOption;
  setOptionDetail: (data: IOption) => void;
}

export const useOptionStore = create<IProps>()(
  devtools((set) => ({
    modal: false,
    setModal: (modal: boolean) => set({ modal: modal }),
    // modalInfo: false,
    // setModalInfo: (modal: boolean) => set({ modalInfo: modal }),
    modalType: "add",
    setModalType: (data: "add" | "update") => set({ modalType: data }),
    optionDetail: defaultOption,
    setOptionDetail: (data: IOption) => set({ optionDetail: data }),
  }))
);
