import { List } from "@/redux/features/todoSlice";
import { create } from "zustand";

interface SelectList {
  selectedList: null | List;
  setSelectedList: (list: null | List) => void;
}

const useStore = create<SelectList>((set) => ({
  selectedList: null,
  setSelectedList: (list) => set({ selectedList: list }),
}));

export default useStore;
