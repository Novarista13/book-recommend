"use client";

import React, { useState, useRef } from "react";

import BookCover from "./BookCover";
import BuyBook from "./BuyBook";
import AboutAuthor from "./AboutAuthor";
import BookNav from "./BookNav";
import AboutBook from "./AboutBook";

const Books = ({ params }: { params: { id: string } }) => {
  return (
    <div className="overflow-y-auto m-9 mr-1">
      <div className="grid grid-cols-9 grid-rows-7 gap-5">
        <div className="col-span-2 row-span-3">
          <BookCover />
        </div>
        <div className="col-span-4 row-span-3 col-start-3">
          <AboutBook />
        </div>
        <div className="col-span-3 row-span-3 col-start-7">
          <AboutAuthor />
        </div>
        <div className="col-span-2 row-span-3 row-start-4">
          <BuyBook />
        </div>
        <div className="col-span-7 row-span-3 col-start-3 row-start-4">
          <BookNav />
        </div>
      </div>
    </div>
  );
};

export default Books;
