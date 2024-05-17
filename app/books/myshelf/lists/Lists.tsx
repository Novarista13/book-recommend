"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SingleList from "./SingleList";
import ListView from "./ListView";
import CreateListModal from "./createListModal";
import { useIsVisible } from "../../[id]/bookOverview/reviews/Reviews";

export interface lists {
  [listType: string]: {
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
  }[];
}

const Lists = ({
  removeFavorite,
}: {
  removeFavorite: (id: number) => void;
}) => {
  const [lists, setLists] = useState<lists>({});
  const [error, setError] = useState("");
  const [currentList, setCurrentList] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const contentRef = useRef(null);
  const isVisible = useIsVisible(contentRef);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/api/lists");
        let data = res.data;
        setLists(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();
  }, [isVisible]);

  return (
    <div ref={contentRef} className=" text-[#F8FAE5]">
      <CreateListModal
        openModal={openModal}
        lists={lists}
        setLists={setLists}
        setOpenModal={setOpenModal}
      />
      {currentList?.length > 0 ? (
        <ListView
          setCurrent={setCurrentList}
          title={currentList}
          books={lists[currentList]}
          removeFavorite={removeFavorite}
        />
      ) : (
        <div className="flex flex-row justify-start my-5 gap-[27px] flex-wrap">
          {Object.keys(lists).map(
            (keyName) =>
              keyName !== "Favorites" && (
                <SingleList
                  lists={lists}
                  setLists={setLists}
                  setCurrent={setCurrentList}
                  key={keyName}
                  title={keyName}
                  books={lists[keyName]}
                />
              )
          )}
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
      )}
    </div>
  );
};

export default Lists;
