import React from "react";
import { Plus } from "lucide-react";
import taskModalStore from "@/zustand/taskModalStore";

const AddTaskButton = () => {
  const { open, action } = taskModalStore();

  return (
    <button
      className="p-4 text-slate-50 bg-slate-400 rounded-lg shadow-md sticky w-min h-min left-full bottom-4 m-4"
      onClick={() => open("create-task")}
    >
      <Plus />
    </button>
  );
};

export default AddTaskButton;
