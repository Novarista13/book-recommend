"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import CategoryDropdown from "./categoryDropDown";

const page = () => {
  const [books, setBooks] = useState<
    {
      id: number;
      title: string;
      rating: string;
      availability: string;
      status: string;
      author: { name: string };
      publishedYear: number;
      cover: string;
    }[]
  >([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/api/books");
        let data = res.data;
        setBooks(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();
  }, []);

  return (
    <div className=" md:ml-[24px] pt-[18px] pr-4">
      <CategoryDropdown />
      <div className="flex flex-row  items-center gap-x-10 p-4 text-white">
        <div className="basis-[369px]  ">Title</div>
        <div className="basis-1/12 ">Ratings</div>
        <div className="basis-3/12 ">Category</div>
        <div className="basis-1/12 ">Availability</div>
        <div className="basis-[413px] ">Status</div>
      </div>
      <div className="flex flex-col gap-y-6 my-2">
        {books?.map((book) => (
          <SingleBook key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
};

export default page;
