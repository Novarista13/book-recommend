import React, { useState } from "react";
import SingleBook from "../allBooks/SingleBook";
import axios from "axios";
import AddBookModal from "./addBookModal";

export interface listBook {
  id: number;
  status: string;
  title: string;
  Lists: string[];
  description: string;
  lang: string;
  publishedYear: number | null;
  cover: string | null;
  author: {
    name: string;
  };
}

const ListView = ({
  title,
  books,
  setCurrent,
  removeFavorite,
}: {
  title: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  books: listBook[];
  removeFavorite: (id: number) => void;
}) => {
  const [currentBooks, setCurrentBooks] = useState(books);
  const [openModal, setOpenModal] = useState(false);

  let remove = async (id: number) => {
    await axios.delete(`/api/lists?listType=${title}&bookId=${id}`);
    setCurrentBooks(currentBooks.filter((b) => b.id !== id));
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-x-5 mb-7">
        <AddBookModal
          listType={title}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <button
          className="flex items-center justify-center gap-x-1 text-sm"
          onClick={() => setCurrent("")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 19.5L8.25 12L15.75 4.5"
              stroke="#F8FAE5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="text-2xl font-extrabold text-left text-[#F8FAE5]">
          {title}
        </p>
      </div>
      <div className="flex flex-row gap-[27px] flex-wrap px-5">
        {currentBooks?.map((b) => (
          <SingleBook
            remove={remove}
            key={b.id}
            removeFavorite={removeFavorite}
            favorite={b?.Lists.includes("Favorites")}
            book={b}
          />
        ))}
        <button onClick={() => setOpenModal(true)}>
          <svg
            className="basis-1/4 max-w-[150px] p-[30px] rounded-3xl border-[3px] border-dashed border-[#F8FAE5]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z"
                stroke="#F8FAE5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M21 7V18C21 19.6569 19.6569 21 18 21H7"
                stroke="#F8FAE5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 10V7M10 10V13M10 10H13M10 10H7"
                stroke="#F8FAE5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ListView;
