"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("/api/books");
        let data = res.data;
        setBooks(data);
        console.log(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="my-5 text-[#F8FAE5]">
      <p className=" text-2xl font-extrabold">Good Morning</p>
      <h1 className="my-3">Recommended for you</h1>
      <div className="flex flex-row gap-x-8  flex-nowrap">
        {/* {books.map((b) => (
        <SingleBook key={b} book={b} />
      ))} */}
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
      </div>
    </div>
  );
};

export default Books;
