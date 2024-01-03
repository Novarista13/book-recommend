"use client";

import bookImage from "../../public/book.jpg";
import Image from "next/image";

const SingleBook = ({ book }: any) => {
  return (
    <div className="max-w-32 basis-32 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          width={105}
          height={150}
          src={bookImage}
          className="rounded-lg mx-auto my-3 mb-1"
          alt="book image"
        />
      </a>
      <div className="p-1 text-center">
        <a href="#">
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            Here are the
          </p>
        </a>
      </div>
    </div>
  );
};

export default SingleBook;
