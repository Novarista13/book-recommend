"use client";
import { useEffect, useState } from "react";
import check from "../../../public/check.svg";
import cross from "../../../public/cross.svg";
import Image from "next/image";
import axios from "axios";

const SingleBook = ({
  book,
}: {
  book: {
    id: number;
    title: string;
    rating: string;
    status: string;
    availability: string;
    author: { name: string };
    publishedYear: number;
    cover: string;
  };
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      let res = await axios.get(`/api/category-list?bookId=${book?.id}`);
      let data = res.data;
      setCategories(data.categoryArray);
    })();
  }, []);
  console.log(categories);

  return (
    <a
      href={`/books/${book?.id}`}
      className="flex flex-col items-center bg-[#F8FAE5] border border-[#ffecd6] rounded-lg shadow md:flex-row  hover:bg-[#e5e9d2] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 gap-x-8 p-3"
    >
      <Image
        width={55}
        height={60}
        src={`/${book?.cover ?? "sample-cover.jpg"}`}
        className="pl-2 basis-1/12 rounded-lg  object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
        alt="book image"
      />
      <div className="basis-3/12 flex flex-col justify-between leading-normal">
        <p className=" mb-1">{book?.title}</p>
        <p className="text-gray-700 text-[13px]">
          {book?.author.name + " " + (book?.publishedYear ?? "")}
        </p>
      </div>
      <div className="basis-1/12">
        <span>{book?.rating[0]}</span>
        <span className="text-xs text-gray-500">/5</span>
      </div>
      <div className="basis-3/12 flex flex-col justify-between leading-normal gap-y-0.5">
        {categories.length > 0 &&
          categories.map((c) => (
            <p className="text-gray-700 text-[13px]">{c}</p>
          ))}
      </div>
      <div className="basis-2/12 flex flex-col gap-y-1 text-[13px]">
        {[
          { label: "Hard Copy", value: "HardCopy" },
          { label: "E-Book", value: "EBook" },
          { label: "Audio book", value: "Audiobook" },
        ].map((f) => (
          <p key={f.value}>
            {book?.availability.includes(f.value) ? (
              <Image src={check} className="inline me-2" alt="availability" />
            ) : (
              <Image src={cross} className="inline me-2" alt="availability" />
            )}
            {f.label}
          </p>
        ))}
      </div>
      <div className="basis-1/12">
        <p className="bg-[#42BB4E] text-white text-[13px] p-1 px-3 rounded-md">
          {book?.status}
        </p>
      </div>
      <div className="basis-1/12">
        
      </div>
      <div className="basis-1/12">
        <button className="text-[#76453B] text-[13px] border-2 border-[#76453B] hover:text-white hover:bg-[#76453B] focus:ring-2 focus:ring-[#B19470] p-1 px-3 rounded-md">
          Review
        </button>
      </div>
    </a>
  );
};

export default SingleBook;
