"use client";
import React from "react";
import SingleBook from "../allBooks/SingleBook";
import { bookType } from "@/types/bookTypes";

const Favorites = ({
  contentRef,
  books,
  removeFavorite,
}: {
  contentRef: React.RefObject<HTMLDivElement>;
  books: bookType[];
  removeFavorite: (id: number) => void;
}) => {
  return (
    <div className="my-5 text-[#F8FAE5]" ref={contentRef}>
      <div className="flex flex-row gap-[27px] flex-wrap">
        {books.map(
          (b) =>
            b?.listType === "Favorites" && (
              <SingleBook
                favorite={b?.listType === "Favorites"}
                book={b.book}
                removeFavorite={removeFavorite}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Favorites;
