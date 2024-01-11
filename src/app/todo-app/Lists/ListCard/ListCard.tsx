import React, { useEffect, useRef, useState } from "react";
import { List } from "@/redux/features/todoSlice";
import { MoreVerticalIcon } from "lucide-react";
import ListCardMenu from "./ListCardMenu/ListCardMenu";
import { usePathname, useRouter } from "next/navigation";

const ListCard = ({ list }: { list: List }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleBlur = (e: any): void => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleBlur);

    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  }, []);

  const getCompletedTasks = () => {
    return list.tasks.filter((task) => task.completed === true).length || 0;
  };

  const getCompletedTaskPercent = () => {
    const completedTaskPercent = parseInt(
      ((getCompletedTasks() * 100) / list.tasks.length).toFixed()
    );

    if (Number.isNaN(completedTaskPercent)) return 0;
    return completedTaskPercent;
  };

  return (
    <li
      className="h-min mb-4 list-none p-4 bg-slate-50 hover:bg-slate-100 shadow-lg rounded-lg grid gap-4 border-4 hover:border-orange-500"
      key={list.id}
    >
      {/* list header */}
      <div className="flex justify-between items-center">
        <h3 className="text-slate-800 font-medium">{list.name}</h3>
        <div
          className="relative p-2 rounded-full hover:bg-slate-200 cursor-pointer"
          ref={menuRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MoreVerticalIcon className="text-slate-400" size={16} />
          {isMenuOpen && (
            <ListCardMenu list={list} setIsMenuOpen={setIsMenuOpen} />
          )}
        </div>
      </div>

      {/* list description */}
      <div onClick={() => router.push(`${pathname}/${list.id}`)}>
        <p className="text-slate-500 text-sm">{list.description}</p>

        {/* list tasks detail */}
        <div className="text-sm font-medium text-slate-600 flex justify-between">
          <span>tasks: {list.tasks?.length}</span>
          <span>completed: {getCompletedTasks()}</span>
        </div>

        {/* progess bar */}
        <div className="flex items-center gap-4">
          <div className="w-full relative py-2">
            <span className="bg-slate-300 rounded-full w-full h-1 block absolute"></span>
            <span
              className="h-1 rounded-full bg-green-600 block absolute"
              style={{ width: `${getCompletedTaskPercent()}%` }}
            ></span>
          </div>
          <p className="text-slate-500 text-sm">{getCompletedTaskPercent()}%</p>
        </div>
      </div>
    </li>
  );
};

export default ListCard;
