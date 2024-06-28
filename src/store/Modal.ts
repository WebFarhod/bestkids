import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IModal {
  modal: boolean;
  setModal: (item: boolean) => void;
}

export const useModalStore = create<IModal>()(
  devtools((set) => ({
    modal: false,
    setModal: (item: boolean) => set({ modal: item }),
  }))
);
