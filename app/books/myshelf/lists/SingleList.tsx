"use client";
import Image from "next/image";
import RemoveDropDown from "../removeDropDown";
import axios from "axios";
import { lists } from "./Lists";

const SingleList = ({
  lists,
  setLists,
  title,
  setCurrent,
  books,
}: {
  lists: lists;
  setLists: React.Dispatch<React.SetStateAction<lists>>;
  title: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  books: {
    cover: string | null;
  }[];
}) => {
  let remove = async () => {
    await axios.delete(`/api/lists?listType=${title}`);

    const { [title]: removedList, ...filteredObject } = lists;
    setLists(filteredObject);
  };

  return (
    <div
      className="basis-[31%] bg-[#F8FAE5] border border-gray-200 rounded-xl shadow p-1 ps-3.5 text-gray-700 overflow-hidden cursor-pointer relative"
      onClick={() => setCurrent(title)}
    >
      <div className="flex flex-row gap-x-3">
        <div className="relative h-[130px] basis-2/5 items-center my-2">
          <Image
            width={100}
            height={130}
            src={`/${books[0]?.cover ?? "sample-cover.jpg"}`}
            className="h-[130px] w-[100px] z-[3] rounded-lg border border-[#76453B] absolute"
            alt="book image"
          />
          <div className="h-[120px] z-[2] w-[100px] top-[5px] left-[10px] rounded-lg border border-[#76453B] absolute bg-[#B19470]"></div>
          <div className="h-[110px] z-[1] w-[100px] top-[10px] left-[20px] rounded-lg border border-[#76453B] absolute bg-[#B19470]"></div>
        </div>
        <div className="basis-3/5 flex flex-col justify-center align-middle">
          <div className="tracking-wide mx-2">
            <p className="text-[15px] line-clamp-3 font-medium">{title}</p>
            <p className="text-gray-400 text-[13px]">{books?.length} stories</p>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <RemoveDropDown remove={remove} />
        </div>
      </div>
    </div>
  );
};

export default SingleList;
