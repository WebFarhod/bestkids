import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ITeacher } from "../../types/teacherType";

export const defaultData: ITeacher = {
  image: "",
  name: "",
  surname: "",
  rank: "",
  description: "",
  infos: [
    {
      name: "Email:",
      info: "",
    },
    {
      name: "Ta'lim:",
      info: "",
    },
    {
      name: "Faoliyatini boshlagan yil:",
      info: "",
    },
    {
      name: "Bestkids hodimi sifa tida:",
      info: "",
    },
    {
      name: "Eng yoqadigan narsa:",
      info: "",
    },
  ],
  skills: [],
  socials: []
};

interface IProps {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
  modalType: "add" | "update";
  setModalType: (modalType: "add" | "update") => void;
  // teachers: ITeacher[] ;
  // setTeachers: (data: ITeacher[] | []) => void;
  teacherDetail: ITeacher;
  setTeacherDetail: (data: ITeacher) => void;
}

export const useTeacherStore = create<IProps>()(
  devtools((set) => ({
    isLoading: false,
    setLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
    modal: false,
    setModal: (modal: boolean) => set({ modal: modal }),
    modalType: "add",
    setModalType: (data: "add" | "update") => set({ modalType: data }),
    // teachers: [],
    // setTeachers: (data: ITeacher[]) => set({ teachers: data }),
    teacherDetail: defaultData,
    setTeacherDetail: (data: ITeacher) => set({ teacherDetail: data }),
  }))
);

// const setLoading = useTeacherStore((state) => state.setLoading);

// const labelData = [
//   "Email:",
//   "Ta'lim:",
//   "Faoliyatini boshlagan yil:",
//   "Bestkids hodimi sifatida:",
//   "Eng yoqadigan narsa:",
// ];

// const defaultValue = {
//   name: "Farhod",
//   surname: "Olimov",
//   rank: "dfvsd",
//   description:
//     "sfnkjakb ajksdbvaj dja sjd vadjfbjkad fbnadfkj adfjbajd f fadbbjdkfj",
//   infos: [
//     {
//       name: "Email:",
//       info: "1",
//     },
//     {
//       name: "Ta'lim:",
//       info: "2",
//     },
//     {
//       name: "Faoliyatini boshlagan yil:",
//       info: "3",
//     },
//     {
//       name: "Bestkids hodimi sifa tida:",
//       info: "4",
//     },
//     {
//       name: "Eng yoqadigan narsa:",
//       info: "5",
//     },
//   ],

//   skills: [
//     {
//       name: "vsdv",
//       percent: 50,
//     },
//     {
//       name: "sdf",
//       percent: 80,
//     },
//     {
//       name: "sdfsdf",
//       percent: 10,
//     },
//   ],
// };

// const defaultValue = {
//   infos: labelData.map((label) => {
//     return {
//       name: label,
//       info: "",
//     };
//   }),
// };
