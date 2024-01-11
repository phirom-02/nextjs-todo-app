import openListModalStore from "@/zustand/listModalStore";
import { Plus } from "lucide-react";

const AddListButton = () => {
  const { open } = openListModalStore();

  return (
    <div
      className="flex items-center justify-between border-2 border-dashed py-2 px-4 rounded-md opacity-50 hover:opacity-100 cursor-pointer shadow-lg md:mx-20 lg:mx-40 xl:mx-80"
      onClick={() => open("create-list")}
    >
      <span>Add New List</span>
      <Plus />
    </div>
  );
};

export default AddListButton;
