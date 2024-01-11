import { create } from "zustand";

interface OpenModal {
  action: "" | "create-task" | "edit-task";
  open: (actionType: "create-task" | "edit-task") => void;
  close: () => void;
}

const useStore = create<OpenModal>((set) => ({
  action: "",
  open: (actionType) => set({ action: actionType }),
  close: () => set({ action: "" }),
}));

export default useStore;
