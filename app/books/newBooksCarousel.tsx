"use client";

import Link from "next/link";
import bookImage from "../../public/book.jpg";
import Image from "next/image";

const NewBooksCarousel = () => {
  return (
    <div className="rounded-lg border-[3px] border-[#43766C]">
      <div className="slider-wrapper h-[10.3rem] z-[-1]">
        <h3>New Arrivals</h3>
        <div className="floating-books-slider flex flex-row py-4 gap-x-8 ">
          <Link
            href="#"
            className="floating-books ml-6 py-2 h-[130px] rounded-md border-[1.5px] border-[#F8FAE5] shadow-xl"
          >
            <Image
              width={80}
              src={bookImage}
              className="rounded-lg max-w-[80px] mx-2.5"
              alt="book image"
            />
          </Link>
          <Link
            href="#"
            className="floating-books py-2 h-[130px] rounded-md border-[1.5px] border-[#F8FAE5] shadow-xl"
          >
            <Image
              width={80}
              src={bookImage}
              className="rounded-lg max-w-[80px]  mx-2.5"
              alt="book image"
            />
          </Link>
          <Link
            href="#"
            className="floating-books py-2 h-[130px] rounded-md border-[1.5px] border-[#F8FAE5] shadow-xl"
          >
            <Image
              width={80}
              src={bookImage}
              className="rounded-lg max-w-[80px]  mx-2.5"
              alt="book image"
            />
          </Link>
          <Link
            href="#"
            className="floating-books py-2 h-[130px] rounded-md border-[1.5px] border-[#F8FAE5] shadow-xl"
          >
            <Image
              width={80}
              src={bookImage}
              className="rounded-lg max-w-[80px] mx-2.5"
              alt="book image"
            />
          </Link>
          <Link
            href="#"
            className="floating-books py-2 h-[130px] rounded-md border-[1.5px] border-[#F8FAE5] shadow-xl"
          >
            <Image
              width={80}
              src={bookImage}
              className="rounded-lg max-w-[80px]  mx-2.5"
              alt="book image"
            />
          </Link>
          <Link
            href="#"
            className="floating-books py-2 mr-6  h-[130px] rounded-md border-[1.5px] border-[#F8FAE5] shadow-xl"
          >
            <Image
              width={80}
              src={bookImage}
              className="rounded-lg max-w-[80px] mx-2.5"
              alt="book image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewBooksCarousel;
