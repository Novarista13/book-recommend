"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import CategoryDropdown from "./categoryDropDown";
import SearchInput from "./SearchInput";

type searchForm = {
  id: number;
  title: string;
  Lists: string[];
  availability: string;
  status: string;
  author: { name: string };
  publishedYear: number;
  cover: string;
}[];

const page = () => {
  const [books, setBooks] = useState<searchForm>([]);
  const [error, setError] = useState("");
  let [filterdBooks, setFilterdBooks] = useState<searchForm>([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/api/books");
        let data = res.data;
        setBooks(data);
        setFilterdBooks(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();
  }, []);

  function filterBook(title: string) {
    console.log(title);
    let result = books.filter((item) => {
      return item.title.toLowerCase().includes(title.toLowerCase());
    });
    setFilterdBooks(result.length > 0 ? result : books);
  }

  return (
    <div className=" md:ml-[24px] pt-[18px] pr-4">
      <div className="flex flex-row">
        <CategoryDropdown />
        <SearchInput filterBook={filterBook} />
      </div>
      <div className="flex flex-row  items-center gap-x-10 p-4 text-white">
        <div className="basis-[369px]  ">Title</div>
        <div className="basis-1/12 ">Ratings</div>
        <div className="basis-3/12 ">Category</div>
        <div className="basis-1/12 ">Availability</div>
        <div className="basis-[413px] ">Status</div>
      </div>
      <div className="flex flex-col gap-y-6 my-2">
        {filterdBooks?.map((book) => (
          <SingleBook
            favorite={book?.Lists.includes("Favorites")}
            key={book.title}
            book={book}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
