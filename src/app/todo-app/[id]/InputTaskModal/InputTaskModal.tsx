import React, { FormEvent, useState } from "react";
import taskModalStore from "@/zustand/taskModalStore";
import { X } from "lucide-react";
import { useParams } from "next/navigation";
import {
  AddEditTaskPayload,
  Task,
  addTask,
  editTask,
} from "@/redux/features/todoSlice";
import { useDispatch } from "react-redux";
import selectTaskStore from "@/zustand/selectTaskStore";

interface Priority {
  type: "normal" | "routine" | "important" | "urgent";
  color: { radio: string; text: string };
}

const priorities: Priority[] = [
  {
    type: "normal",
    color: { radio: "accent-blue-600", text: "text-blue-600" },
  },
  {
    type: "routine",
    color: { radio: "accent-green-600", text: "text-green-600" },
  },
  {
    type: "important",
    color: { radio: "accent-orange-600", text: "text-orange-400" },
  },
  {
    type: "urgent",
    color: { radio: "accent-red-600", text: "text-red-600" },
  },
];

interface AddTaskModalProps {
  label: string;
  buttonLabel: string;
}

const InputTaskModal = ({ label, buttonLabel }: AddTaskModalProps) => {
  const { selectedTask, setSelectedTask } = selectTaskStore();
  const [priority, setPriority] = useState<Priority["type"]>(
    selectedTask ? selectedTask.priority : "normal"
  );
  const [todo, setTodo] = useState(selectedTask ? selectedTask.todo : "");
  const { close } = taskModalStore();
  const { id: listId }: { id: string } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!todo) return;

    if (selectedTask) {
      const editedTask: Task = { ...selectedTask, todo, priority };

      dispatch(editTask({ listId, task: editedTask }));
      setSelectedTask(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        todo: todo.trim(),
        priority,
        completed: false,
      };

      const addTaskPayLoad: AddEditTaskPayload = {
        listId,
        task: newTask,
      };

      dispatch(addTask(addTaskPayLoad));
    }

    setTodo("");
    setPriority("normal");
    close();
  };

  const handleClose = () => {
    close();
    setSelectedTask(null);
  };

  return (
    <div className="fixed w-full h-full bg-slate-950 bg-opacity-50 top-0 left-0 p-4 flex justify-center items-center">
      <div className="h-min bg-slate-50 p-4 rounded-lg w-full max-w-md flex flex-col gap-4 md:translate-x-1/2">
        <div className="flex">
          <h2 className="font-medium w-full">{label}</h2>
          <span className="text-slate-600" onClick={handleClose}>
            <X />
          </span>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className="p-4 rounded-md bg-slate-200"
            type="text"
            placeholder="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          {/* radio priority input */}
          <div className="flex gap-4 flex-wrap">
            {priorities.map((p, i) => (
              <span className="items-center flex gap-2" key={i}>
                <input
                  className={p.color.radio}
                  type="radio"
                  // defaultChecked={i === 0 ? true : false}
                  defaultChecked={
                    selectedTask
                      ? p.type === selectedTask?.priority
                        ? true
                        : false
                      : i === 0
                      ? true
                      : false
                  }
                  value={p.type}
                  name="priority"
                  id={p.type}
                  onChange={() => setPriority(p.type)}
                />
                <label
                  className={`capitalize font-medium ${p.color.text}`}
                  htmlFor={p.type}
                >
                  {p.type}
                </label>
              </span>
            ))}
          </div>

          {/* submit button */}
          <button className="p-4 bg-slate-400 hover:bg-slate-500 w-full rounded-md text-slate-50 shadow-lg font-bold capitalize">
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputTaskModal;
