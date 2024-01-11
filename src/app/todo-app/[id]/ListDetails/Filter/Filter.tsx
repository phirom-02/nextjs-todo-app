import React, { useState } from "react";
import { Search, X } from "lucide-react";
import filterTaskStore from "@/zustand/filterTasksStore";

const Filter = () => {
  const {
    query,
    completedFilter,
    priorityFilters,
    setQuery,
    setCompletedFilter,
    togglePriorityFilter,
    clearFilters,
  } = filterTaskStore();

  return (
    <div>
      <h2 className="font-medium mb-2">Filter:</h2>
      <div className="">
        <div className="flex items-center gap-2 justify-between px-4 py-2 rounded-md bg-slate-200 mb-4">
          <Search className="text-slate-400" size={20} />
          <input
            className="w-full bg-inherit outline-none flex-1"
            placeholder="Search tasks"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <X
              className="text-slate-600 cursor-pointer"
              size={20}
              onClick={() => setQuery("")}
            />
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-4 text-slate-600">
          <div>
            <input
              type="radio"
              name="drone"
              id="all"
              value="all"
              checked={completedFilter === "all"}
              onChange={() => setCompletedFilter("all")}
            />
            <label className="ml-2" htmlFor="all">
              All
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="drone"
              id="completed"
              value="completed"
              checked={completedFilter === "completed"}
              onChange={() => setCompletedFilter("completed")}
            />
            <label className="ml-2" htmlFor="completed">
              Completed
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="drone"
              id="not-completed"
              value="not completed"
              checked={completedFilter === "not completed"}
              onChange={() => setCompletedFilter("not completed")}
            />
            <label className="ml-2" htmlFor="not-completed">
              Not Completed
            </label>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap mb-4">
          <div>
            <input
              type="checkbox"
              id="normal"
              value="normal"
              checked={priorityFilters.includes("normal")}
              onChange={() => togglePriorityFilter("normal")}
            />
            <label className="ml-2 py-2 text-blue-600" htmlFor="normal">
              Normal
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="routine"
              value="routine"
              checked={priorityFilters.includes("routine")}
              onChange={() => togglePriorityFilter("routine")}
            />
            <label className="ml-2 py-2 text-green-600" htmlFor="routine">
              Routine
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="important"
              value="important"
              checked={priorityFilters.includes("important")}
              onChange={() => togglePriorityFilter("important")}
            />
            <label className="ml-2 py-2 text-orange-600" htmlFor="important">
              Important
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="urgent"
              value="urgent"
              checked={priorityFilters.includes("urgent")}
              onChange={() => togglePriorityFilter("urgent")}
            />
            <label className="ml-2 py-2 text-red-600" htmlFor="urgent">
              Urgent
            </label>
          </div>
        </div>
        <button
          className="py-2 px-4 bg-slate-400 text-slate-50 rounded shadow-md"
          onClick={() => clearFilters()}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
