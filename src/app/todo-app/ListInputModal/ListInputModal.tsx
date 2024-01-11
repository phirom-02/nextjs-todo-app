import React, { useState } from "react";
import openListModalStore from "@/zustand/listModalStore";
import selectListStore from "@/zustand/selectListStore";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { List, addList, editList } from "@/redux/features/todoSlice";
import RootState from "@/redux/types/rootState";

interface ListInputModalProps {
  label: string;
  buttonLabel: string;
}

const ListInputModal = ({ label, buttonLabel }: ListInputModalProps) => {
  const { selectedList, setSelectedList } = selectListStore();
  const [listName, setListName] = useState(selectedList?.name ?? "");
  const [description, setDescription] = useState(
    selectedList?.description ?? ""
  );
  const { close, action } = openListModalStore();

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!listName || !description) return;

    if (action === "create-list") {
      const newList: List = {
        id: Date.now(),
        name: listName.trim(),
        description: description.trim(),
        tasks: [],
      };
      dispatch(addList(newList));
      close();
    } else {
      console.log("edit");
      dispatch(editList({ ...selectedList!, name: listName, description }));
      setSelectedList(null);
      close();
    }
  };

  return (
    <div className="absolute w-full h-full bg-slate-950 bg-opacity-50 top-0 left-0 p-4 flex justify-center">
      <div className="max-w-lg h-min bg-slate-50 translate-y-1/2 rounded-lg text-slate-800 p-4 w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">{label}</h3>
          <span className="cursor-pointer" onClick={close}>
            <X />
          </span>
        </div>

        {/* form */}
        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="p-4 min-w-0 w-full rounded-md bg-slate-200"
            placeholder="List Name"
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
          <textarea
            className="bg-slate-200 rounded-md p-4 resize-none"
            placeholder="Description..."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="p-4 rounded-md shadow-md bg-slate-500 hover:bg-slate-600 text-slate-50 font-bold capitalize">
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListInputModal;
