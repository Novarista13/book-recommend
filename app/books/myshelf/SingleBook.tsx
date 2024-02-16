"use client";

import bookImage from "../../../public/book.jpg";
import Image from "next/image";

const SingleBook = ({ book }: any) => {
  return (
    <div className="flex flex-row gap-x-4 basis-[23%] bg-[#F8FAE5] border border-gray-200 rounded-lg shadow px-3 py-1 pb-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="basis-1/2 ">
        <a href="#">
          <Image
            width={105}
            height={10}
            src={bookImage}
            className="my-2"
            alt="book image"
          />
        </a>
        <div>
          <a href="#">
            <p className="text-[11px] truncate w-24 text-gray-700">
              Don’t Make Me Think
            </p>
            <p className="text-gray-700 text-[9px]">Steve Krug, 2000</p>
            <p className="text-gray-500 text-[9px]">
              <span>4.5</span>
              <span className=" text-gray-500">/5</span>
            </p>
          </a>
        </div>
      </div>
      <div className="basis-1/2 my-2 text-[14px] text-gray-700">
        <div className="pl-1">
          <div className="leading-loose text-[12px]">
            <p>Borrowed on</p>
            <p className="text-[8px]">11 Mar 2023 09:00 AM</p>
          </div>
          <div className="mt-1 leading-loose text-[12px]">
            <p>Borrowed on</p>
            <p className="text-[8px]">11 Mar 2023</p>
          </div>
        </div>
        <div className="text-center my-3">
          <p className="bg-[#42BB4E] h-8 mx-auto text-white p-1 rounded-md">
            completed
          </p>
        </div>

        <button className="text-[#76453B] border-2 border-[#76453B] hover:text-white hover:bg-[#76453B] text-center w-full focus:ring-2 focus:ring-[#B19470] p-1 rounded-lg">
          Details
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
