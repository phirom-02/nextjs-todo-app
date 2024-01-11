// import { List } from "@/redux/features/todoSlice";
import { Task } from "@/redux/features/todoSlice";
import { create } from "zustand";

interface SelectTask {
  selectedTask: null | Task;
  setSelectedTask: (task: null | Task) => void;
}

const useStore = create<SelectTask>((set) => ({
  selectedTask: null,
  setSelectedTask: (task) => set({ selectedTask: task }),
}));

export default useStore;
