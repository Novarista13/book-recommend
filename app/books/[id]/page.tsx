"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleBook from "../SingleBook";

const Books = ({ params }: { params: { id: string } }) => {
  const [book, setBook] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(`/api/books/${params.id}`);
        let data = res.data;
        setBook(data);
        console.log(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    }
    fetchData();
  }, [params.id]);

  return (
    <div>
      {/* {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )} */}
      Books
      <SingleBook book={book} />
    </div>
  );
};

export default Books;
