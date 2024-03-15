"use client";

import React, { useState, useEffect } from "react";

import BookCover from "./BookCover";
import ReadBook from "./ReadBook";
import AboutAuthor from "./AboutAuthor";
import AboutBook from "./AboutBook";
import axios from "axios";
import BookTabs from "./BookTabs";

const PageUI = ({ params }: { params: { id: string } }) => {
  const [book, setBook] = useState<{
    title: string;
    description: string;
    rating: string;
    status: string;
    author: { name: string; about: string };
    publishedYear: number;
    publishedPlatform: string;
    lang: string;
    parts: number;
  }>();
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/api/books/${params.id}`);
        let data = res.data;
        setBook(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();
  }, []);

  return (
    book && (
      <div className=" m-7 mr-4">
        <div className="grid grid-cols-5  gap-3 gap-y-8">
          <div className="row-span-3">
            <BookCover />
          </div>
          <div className="col-span-2 row-span-3 col-start-2 ml-4">
            <AboutBook book={book} />
          </div>
          <div className="col-span-2 row-span-3 col-start-4 ml-4">
            <AboutAuthor author={book?.author} />
          </div>
          <div className="row-start-4 row-span-3">
            <ReadBook />
          </div>
          <div className="col-span-4 col-start-2 row-span-3 row-start-4 ml-4 ">
            {/* <BookNav /> */}
            <BookTabs book={book} />
          </div>
        </div>
      </div>
    )
  );
};

export default PageUI;
