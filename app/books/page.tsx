import React from "react";
import Books from "./books";
import Quote from "./quote";
import NewBooksCarousel from "./newBooksCarousel";

const page = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-2 row-span-2">
        <Quote />
      </div>
      <div className="col-span-3 row-span-2 col-start-3">
        <NewBooksCarousel />
      </div>
      <div className="col-span-5 row-span-2 row-start-3">
        <Books />
      </div>
      <div className="col-span-5 row-span-2 row-start-5">
        <Books />
      </div>
    </div>
  );
};

export default page;
