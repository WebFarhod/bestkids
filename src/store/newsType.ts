import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface INewsType {
  type: string;
  setType: (item: string) => void;
}

export const useNewsTypeStore = create<INewsType>()(
  devtools((set) => ({
    type: "barchasi",
    setType: (item: string) => set({ type: item }),
  }))
);
