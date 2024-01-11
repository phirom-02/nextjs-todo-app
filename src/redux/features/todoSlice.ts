import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "lucide-react";

export interface Task {
  id: number;
  todo: string;
  completed: boolean;
  priority: "urgent" | "important" | "routine" | "normal";
}

export interface List {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
}

export interface TodoState {
  lists: List[];
}

export interface AddEditTaskPayload {
  listId: string;
  task: Task;
}

export interface CommonTaskPayload {
  listId: string;
  taskId: number;
}

const initialState: TodoState = {
  lists: [
    {
      id: 1,
      name: "school",
      description:
        "School related tasks, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi autem maiores dolores labore fugiat laborum neque perspiciatis eos nemo ea?",
      tasks: [
        {
          id: 1,
          todo: "Lorem ipsum dolor sit amet.",
          completed: true,
          priority: "normal",
        },
        {
          id: 2,
          todo: "Lorem ipsum.",
          completed: false,
          priority: "important",
        },
        {
          id: 3,
          todo: "Lorem ipsum dolor sit.",
          completed: false,
          priority: "urgent",
        },
      ],
    }
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      state.lists.push(action.payload);
    },
    deleteList: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
    editList: (state, action: PayloadAction<List>) => {
      state.lists = state.lists.map((list) =>
        list.id === action.payload.id ? action.payload : list
      );
    },
    addTask: (state, action: PayloadAction<AddEditTaskPayload>) => {
      const { listId, task } = action.payload;
      state.lists.map((list) => {
        if (list.id.toString() === listId) {
          list.tasks.push(task);
          return list;
        }
        return list;
      });
    },
    toggleCompleteTask: (state, action: PayloadAction<CommonTaskPayload>) => {
      const { listId, taskId } = action.payload;
      state.lists = state.lists.map((list) => {
        if (list.id.toString() === listId) {
          list.tasks = list.tasks.map((task): Task => {
            return task.id === taskId
              ? { ...task, completed: !task.completed }
              : task;
          });
        }
        return list;
      });
    },
    deleteTask: (state, action: PayloadAction<CommonTaskPayload>) => {
      const { listId, taskId } = action.payload;
      state.lists = state.lists.map((list) => {
        if (list.id.toString() === listId) {
          list.tasks = list.tasks.filter((task) => task.id !== taskId);
        }
        return list;
      });
    },
    editTask: (state, action: PayloadAction<AddEditTaskPayload>) => {
      const { listId, task: editedTask } = action.payload;
      state.lists = state.lists.map((list) => {
        if (list.id.toString() === listId) {
          list.tasks = list.tasks.map((task) => {
            if (task.id === editedTask.id) {
              return editedTask;
            }
            return task;
          });
        }

        return list;
      });
    },
  },
});

export const {
  addList,
  deleteList,
  editList,
  addTask,
  toggleCompleteTask,
  deleteTask,
  editTask,
} = todoSlice.actions;
export default todoSlice.reducer;
