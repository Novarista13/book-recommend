import React from "react";
import Books from "./books";
import Quote from "./quote";
import NewBooksCarousel from "./newBooksCarousel";

const page = () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books`);
  // const books = await res.json();
  // console.log("books" + res.ok);

  return (
    <div className="grid grid-cols-5 pr-3 gap-4 md:ml-[24px] pt-[24px]">
      <div className="col-span-2 row-span-2">
        <Quote />
      </div>
      <div className="col-span-3 row-span-2 col-start-3">
        <NewBooksCarousel />
      </div>
      <div className="col-span-5 row-span-2 row-start-3">
        <Books />
      </div>
    </div>
  );
};

export default page;
