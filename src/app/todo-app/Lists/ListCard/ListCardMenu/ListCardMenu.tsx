import React from "react";
import { List, deleteList } from "@/redux/features/todoSlice";
import openListModalStore from "@/zustand/listModalStore";
import selectListStore from "@/zustand/selectListStore";
import { useDispatch } from "react-redux";

interface ListCardMenuProps {
  list: List;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListCardMenu = ({ list, setIsMenuOpen }: ListCardMenuProps) => {
  const dispatch = useDispatch();
  const { open } = openListModalStore();
  const { setSelectedList } = selectListStore();

  const menu = [
    {
      title: "Edit",
      functionHandler: () => {
        open("edit-list");
        setSelectedList(list);
        setIsMenuOpen(false);
      },
    },
    {
      title: "Delete",
      functionHandler: () => {
        dispatch(deleteList(list.id));
        setIsMenuOpen(false);
      },
    },
  ];

  return (
    <div className="absolute right-0 top-[90%] bg-slate-50 rounded-md shadow-md py-2">
      <ul className="text-slate-600">
        {menu.map((el, id) => (
          <li
            className="px-4 py-2 hover:bg-slate-300 cursor-pointer text-sm"
            key={id}
            onClick={el.functionHandler}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCardMenu;
