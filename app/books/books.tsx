"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const Books = () => {
  const [books, setBooks] = useState<{}[]>([]);
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
    <div className="my-5 text-[#F8FAE5]">
      <p className=" text-2xl font-extrabold">Good Morning</p>
      <h1 className="my-3">Recommended for you</h1>
      <div className="flex flex-row gap-x-8 overflow-x-scroll flex-nowrap">
        {books?.map((b, id) => (
          <SingleBook key={id} book={b} />
        ))}
      </div>
    </div>
  );
};

export default Books;
