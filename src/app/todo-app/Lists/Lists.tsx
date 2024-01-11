import RootState from "@/redux/types/rootState";
import React from "react";
import { useSelector } from "react-redux";
import ListCard from "./ListCard/ListCard";
import Masonry from "react-masonry-css";

const Lists = () => {
  const { lists } = useSelector((state: RootState) => state.todos);

  return (
    <>
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {lists.map((list) => (
          <ListCard key={list.id} list={list} />
        ))}
      </div> */}

      <Masonry
        breakpointCols={{ default: 5, 1400: 4, 1024: 3, 640: 2, 425: 1 }}
        columnClassName="masonry-column"
        className="masonry-grid"
      >
        {lists.map((list) => (
          <ListCard key={list.id} list={list} />
        ))}
      </Masonry>
    </>
  );
};

export default Lists;
