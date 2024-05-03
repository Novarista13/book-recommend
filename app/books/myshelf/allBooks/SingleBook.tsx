"use client";

import Markdown from "react-markdown";
import bookImage from "../../../../public/book.jpg";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import RemoveDropDown from "../removeDropDown";

interface bookProps {
  favorite: boolean;
  book: {
    id: number;
    status: string;
    title: string;
    description: string;
    author: {
      name: string;
    };
    publishedYear: number | null;
    lang: string;
    cover: string | null;
  };
  removeFavorite: (id: number) => void;
  remove?: (id: number) => Promise<void>;
}

const SingleBook = ({ favorite, book, removeFavorite, remove }: bookProps) => {
  const [liked, setLiked] = useState(favorite);

  return (
    <div className="basis-[31%] bg-[#F8FAE5] border border-gray-200 rounded-xl shadow p-2 px-4 relative">
      <div className="flex flex-row items-center gap-x-4 my-2">
        <Image
          width={80}
          height={10}
          src={bookImage}
          className=" h-[80px] w-[80px] basis-1/3 rounded-lg border border-[#76453B]"
          alt="book image"
        />
        <div className="basis-2/3 leading-6">
          <p className="text-[16px] text-gray-700">{book?.title}</p>
          <p className="text-gray-500 text-[11px]">
            by {book?.author?.name}, {book?.publishedYear}
          </p>
        </div>
        {remove && <RemoveDropDown remove={() => remove(book.id)} />}
      </div>
      <div>
        <p className="line-clamp-4 text-[13px] my-1 prose  prose-p:text-[#76453B] prose-headings:text-[#76453B] prose-headings:my-2 prose-ul:mb-2 prose-p:my-3 prose-ul:text-[#76453B] prose-bullets:text-[#76453B] prose-strong:text-[#76453B]">
          <Markdown>{book?.description}</Markdown>
        </p>

        <div className="text-center my-3 mx-auto flex flex-row gap-x-3 justify-center items-center">
          <p className="bg-[#42BB4E] h-[29px] text-white text-[13px] p-1 px-3 rounded-md">
            completed
          </p>
          <button className="text-[#76453B] h-[29px] flex items-center border-2 border-[#76453B] hover:text-white hover:bg-[#76453B] focus:ring-2 focus:ring-[#B19470] text-[13px] p-1 px-4 rounded-md">
            Details
          </button>
          <button
            onClick={async () => {
              if (liked) {
                await axios.delete(
                  `/api/lists?bookId=${book?.id}&listType=Favorites`
                );
                removeFavorite(book?.id);
                setLiked(false);
              } else {
                await axios.post("/api/lists", {
                  bookIdArray: [book.id],
                  listType: "Favorites",
                });
                setLiked(true);
              }
            }}
          >
            {liked ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    d="M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z"
                    fill="#D21E1E"
                    stroke="#D21E1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    d="M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z"
                    stroke="#D21E1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
