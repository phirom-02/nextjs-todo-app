import React, { useState } from "react";
import { ArrowLeftIcon, ChevronDown, ChevronUp } from "lucide-react";
import { List } from "@/redux/features/todoSlice";
import { useRouter } from "next/navigation";
import Filter from "./Filter/Filter";

const ListDetails = ({ list }: { list: List }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const completedTasksPercent = () => {
    const completedTasks = list.tasks.filter((task) => task.completed === true);
    const completedTasksPercent = parseInt(
      ((completedTasks.length * 100) / list.tasks.length).toFixed()
    );

    if (Number.isNaN(completedTasksPercent)) return 0;
    return completedTasksPercent;
  };

  return (
    <div
      className={`p-4 sticky top-0 flex flex-col gap-4 bg-slate-50 z-[1] md:min-w-[35%] lg:min-w-[30%] xl:min-w-[25%] ${
        !open && "shadow-md"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="p-2" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </span>
        <h2 className="flex-1 font-medium text-lg">{list?.name}</h2>
        <span
          className="p-2 bg-slate-200 cursor-pointer rounded-md md:hidden"
          onClick={() => setOpen((open) => !open)}
        >
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </div>

      <div
        className={`${
          !open ? "hidden" : "shadow-md"
        } flex flex-col gap-4 w-full absolute bg-slate-50 left-0 px-4 pb-4 top-16 md:flex md:p-8 md:shadow-none md:h-screen`}
      >
        <p className="text-slate-600">{list?.description}</p>

        <div className="text-sm font-medium text-slate-600 flex justify-between">
          <span>tasks: {list?.tasks?.length}</span>
          <span>completed: 0</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full relative py-2">
            <span className="bg-slate-300 rounded-full w-full h-1 block absolute"></span>
            <span
              style={{ width: `${completedTasksPercent()}%` }}
              className={`h-1 rounded-full bg-green-600 block absolute`}
            ></span>
          </div>
          <p className="text-slate-500 text-sm">{completedTasksPercent()}%</p>
        </div>

        <Filter />
      </div>
    </div>
  );
};

export default ListDetails;
