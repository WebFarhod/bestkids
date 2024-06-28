import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface INav {
  state: boolean;
  setState: (item: boolean) => void;
}

export const useNavStore = create<INav>()(
  devtools((set) => ({
    state: false,
    setState: (item: boolean) => set({ state: item }),
  }))
);
