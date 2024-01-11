import React from "react";

import { CheckSquare2, DeleteIcon, EditIcon, Square } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  Task,
  deleteTask,
  toggleCompleteTask,
} from "@/redux/features/todoSlice";
import { List } from "@/redux/features/todoSlice";
import { useParams } from "next/navigation";
import taskModalStore from "@/zustand/taskModalStore";
import selectTaskStore from "@/zustand/selectTaskStore";
import filterTaskStore from "@/zustand/filterTasksStore";

const TaskList = ({ list }: { list: List }) => {
  const { query, completedFilter, priorityFilters } = filterTaskStore();

  const filteredTasks = list.tasks.filter((task) => {
    const matchesQuery = task.todo.toLowerCase().includes(query.toLowerCase());
    const matchesStatus =
      completedFilter === "all" ||
      (completedFilter === "completed" && task.completed) ||
      (completedFilter === "not completed" && !task.completed);
    const matchesPriority =
      priorityFilters.length === 0 || priorityFilters.includes(task.priority);
    return matchesQuery && matchesStatus && matchesPriority;
  });

  return (
    <ul className="flex-1 flex flex-col gap-2 py-4">
      {filteredTasks.map((task) => (
        <_Task task={task} key={task.id} />
      ))}
    </ul>
  );
};

const _Task = ({ task }: { task: Task }) => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const { open } = taskModalStore();
  const { setSelectedTask } = selectTaskStore();

  const priorityBorderColors = (
    priority: "urgent" | "important" | "routine" | "normal"
  ) => {
    switch (priority) {
      case "urgent":
        return "border-red-600";
      case "important":
        return "border-orange-400";
      case "routine":
        return "border-green-600";
      default:
        return "border-blue-600";
    }
  };

  const handleSelect = (): void => {
    open("edit-task");
    setSelectedTask(task);
  };

  return (
    <li
      className={`${
        task.completed ? "text-slate-500 line-through" : "text-slate-600"
      } ${priorityBorderColors(
        task.priority
      )} border-l-4 flex items-start gap-2 p-2 bg-slate-100 rounded shadow`}
      key={task.id}
    >
      <span
        className="p-2"
        onClick={() =>
          dispatch(
            toggleCompleteTask({
              taskId: task.id,
              listId: id,
            })
          )
        }
      >
        {task.completed ? <CheckSquare2 /> : <Square />}
      </span>
      <p
        className="flex-1 py-2"
        onClick={() =>
          dispatch(
            toggleCompleteTask({
              taskId: task.id,
              listId: id,
            })
          )
        }
      >
        {task.todo}
      </p>
      <span
        className="text-red-600 p-2"
        onClick={() => dispatch(deleteTask({ taskId: task.id, listId: id }))}
      >
        <DeleteIcon size={20} />
      </span>
      <span className="text-slate-500 p-2" onClick={handleSelect}>
        <EditIcon size={20} />
      </span>
    </li>
  );
};

export default TaskList;
