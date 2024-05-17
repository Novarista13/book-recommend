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
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    }
    fetchData();
  }, []);

  return (
    <div className=" text-[#F8FAE5]">
      <div className="flex flex-row gap-[27px] flex-wrap">
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
