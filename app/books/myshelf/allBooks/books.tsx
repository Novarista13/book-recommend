"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import SingleBook from "./SingleBook";
import { removeDuplicates } from "./removeDupli";
import { bookType } from "@/types/bookTypes";

const Books = ({
  books,
  removeFavorite,
}: {
  books: bookType[];
  removeFavorite: (id: number) => void;
}) => {
  const [localBooks, setLocalBooks] = useState<bookType[]>([]);

  useMemo(() => {
    (async () => {
      let data = await removeDuplicates(books);
      setLocalBooks(data);
    })();
  }, [books]);
  let remove = () => {};

  return (
    <div className="my-5 text-[#F8FAE5]">
      <div className="flex flex-row gap-[27px] flex-wrap">
        {localBooks.map((b) => {
          // console.log({
          //   id: b.book.id,
          //   liked:
          //     typeof b?.listType === "string"
          //       ? b?.listType === "Favorites"
          //       : b?.listType.includes("Favorites"),
          // });
          return (
            <SingleBook
              key={b.book.id}
              favorite={
                typeof b?.listType === "string"
                  ? b?.listType === "Favorites"
                  : b?.listType.includes("Favorites")
              }
              book={b.book}
              removeFavorite={removeFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
