"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import RootState from "@/redux/types/rootState";
import { List } from "@/redux/features/todoSlice";
import ListDetails from "./ListDetails/ListDetails";
import AddTaskButton from "./AddTaskButton/AddTaskButton";
import taskModalStore from "@/zustand/taskModalStore";
import InputTaskModal from "./InputTaskModal/InputTaskModal";
import TaskList from "./TasksList/TaskList";

const ListPreviewPage = () => {
  const { id }: { id: string } = useParams();
  const { action } = taskModalStore();
  const lists = useSelector((state: RootState) => state.todos.lists);
  const selectedList: List = lists.find((list) => list.id.toString() === id)!;

  return (
    <main className="bg-slate-50 flex-1 flex flex-col md:flex-row md:items-start text-slate-800">
      <ListDetails list={selectedList} />

      <div className="border-2 relative flex-1 flex flex-col md:p-4 h-screen overflow-y-auto scrollbar">
        <TaskList list={selectedList} />
        <AddTaskButton />
      </div>
      {action && (
        <InputTaskModal
          label={action === "create-task" ? "New Task" : "Edit Task"}
          buttonLabel={action === "create-task" ? "Create task" : "Save"}
        />
      )}
    </main>
  );
};

export default ListPreviewPage;
