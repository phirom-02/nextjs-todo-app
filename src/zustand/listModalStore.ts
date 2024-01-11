import { create } from "zustand";

interface OpenModal {
  action: "" | "create-list" | "edit-list";
  open: (actionType: "create-list" | "edit-list") => void;
  close: () => void;
}

const useStore = create<OpenModal>((set) => ({
  action: "",
  open: (actionType) => set({ action: actionType }),
  close: () => set({ action: "" }),
}));

export default useStore;
