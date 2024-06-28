import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IFAQ {
  faq: string;
  setFaq: (item: string) => void;
}

export const useFaqStore = create<IFAQ>()(
  devtools((set) => ({
    faq: "",
    setFaq: (item: string) => set({ faq: item }),
  }))
);
