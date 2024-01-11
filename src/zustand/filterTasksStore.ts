import { create } from "zustand";

interface Priority {
  priority: "normal" | "routine" | "important" | "urgent";
}

interface FilterState {
  query: string;
  completedFilter: "all" | "completed" | "not completed";
  priorityFilters: Priority["priority"][];
}

interface FilterActions {
  setQuery: (query: string) => void;
  setCompletedFilter: (filter: FilterState["completedFilter"]) => void;
  togglePriorityFilter: (priority: Priority["priority"]) => void;
  clearFilters: () => void;
}

const useStore = create<FilterState & FilterActions>((set) => ({
  query: "",
  completedFilter: "all",
  priorityFilters: [],

  setQuery: (query) => set({ query }),
  setCompletedFilter: (filter) => set({ completedFilter: filter }),
  togglePriorityFilter: (priority) =>
    set((state) => ({
      priorityFilters: state.priorityFilters.includes(priority)
        ? state.priorityFilters.filter((p) => p !== priority)
        : [...state.priorityFilters, priority],
    })),
  clearFilters: () =>
    set({ query: "", completedFilter: "all", priorityFilters: [] }),
}));

export default useStore;
