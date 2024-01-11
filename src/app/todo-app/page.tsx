"use client";

import openListModalStore from "@/zustand/listModalStore";
import AddListButton from "./AddListButton/AddListButton";
import ListInputModal from "./ListInputModal/ListInputModal";
import Lists from "./Lists/Lists";

const TodoAppPage = () => {
  const { action } = openListModalStore();

  return (
    <main className="p-4 md:py-8 lg:px-20 flex-1">
      <div className="grid gap-8">
        {/* add list form */}
        <AddListButton />

        {/* render form */}
        <Lists />

        {action && (
          <ListInputModal
            label={action === "create-list" ? "New List" : "Edit List"}
            buttonLabel={action === "create-list" ? "Create List" : "Save"}
          />
        )}
      </div>
    </main>
  );
};

export default TodoAppPage;
