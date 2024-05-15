"use client";

import Link from "next/link";
import bookImage from "../../public/book.jpg";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { book } from "@/types/bookTypes";

const NewBooksCarousel = () => {
  const [books, setBooks] = useState<book[]>([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get("/api/books");
      let data = res.data;
      setBooks(data.slice(0, 5));
    })();
  }, []);
  console.log(books);

  return (
    <div className="rounded-lg border-[3px] border-[#43766C]">
      <div className="slider-wrapper h-[10.3rem] z-[-1]">
        <h3>New Arrivals</h3>
        <div className="floating-books-slider flex flex-row py-4 gap-x-8 ">
          {books?.map((b, id) => (
            <Link
              href={`/books/${b?.id}`}
              className="floating-books cursor-pointer z-10 py-2 h-[130px] rounded-md border-[1.5px] border-[#F8FAE5] shadow-xl"
            >
              <Image
                height={130}
                width={80}
                src={`/${b?.cover ?? "sample-cover.jpg"}`}
                className="rounded-lg max-w-[80px] h-auto  mx-2.5"
                alt="book image"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBooksCarousel;
