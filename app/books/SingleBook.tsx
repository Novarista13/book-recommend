"use client";

import Link from "next/link";
import Image from "next/image";

const SingleBook = ({ book }: any) => {
  return (
    <div className="min-w-32 basis-32 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/books/${book?.id}`}>
        <Image
          width={105}
          height={150}
          src={`/${book.cover ?? "sample-cover.jpg"}`}
          className="rounded-lg mx-auto my-3 mb-1 h-[150px]"
          alt="book image"
        />
      </Link>
      <div className="p-1 text-center">
        <Link href={`/books/${book?.id}`}>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {book?.title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SingleBook;
