import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IClass } from "../../types/classType";

export const defaultClass: IClass = {
  _id: "",
  image: "",
  name: "",
  description: "",
  about: "",
  type: "",
  price: "",
  infos: [
    {
      name: "yosh",
      info: "",
    },
    {
      name: "haftasiga",
      info: "",
    },
    {
      name: "soat",
      info: "",
    },
    {
      name: "Sinf hajmi",
      info: "",
    },
  ],
  teacher: "7",
};
interface IProps {
  //   isLoading: boolean;
  //   setLoading: (isLoading: boolean) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
  modalInfo: boolean;
  setModalInfo: (modal: boolean) => void;
  modalType: "add" | "update";
  setModalType: (modalType: "add" | "update") => void;
  // teachers: IClass[] ;
  // setTeachers: (data: IClass[] | []) => void;
  classDetail: IClass;
  setClassDetail: (data: IClass) => void;
}

export const useClassStore = create<IProps>()(
  devtools((set) => ({
    // isLoading: false,
    // setLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
    modal: false,
    setModal: (modal: boolean) => set({ modal: modal }),
    modalInfo: false,
    setModalInfo: (modal: boolean) => set({ modalInfo: modal }),
    modalType: "add",
    setModalType: (data: "add" | "update") => set({ modalType: data }),
    // teachers: [],
    // setTeachers: (data: IClass[]) => set({ teachers: data }),
    classDetail: defaultClass,
    setClassDetail: (data: IClass) => set({ classDetail: data }),
  }))
);
