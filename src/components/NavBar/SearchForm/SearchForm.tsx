"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`flex items-center gap-2 border px-4 py-2 mb-8 rounded-lg max-w-80 ${
        focus ? "border-slate-50" : "border-slate-400"
      }`}
    >
      <span>
        <Search className={focus ? "text-slate-50" : "text-slate-400"} />
      </span>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="flex-1 bg-transparent outline-none w-56"
        placeholder="Search Tasks"
        type="text"
        value={query}
        onChange={(e) => setQuery((query) => e.target.value)}
      />
      {query && (
        <span
          className="cursor-pointer text-slate-400 hover:text-slate-50"
          onClick={() => setQuery((query) => "")}
        >
          <X />
        </span>
      )}
    </div>
  );
};

export default SearchForm;
