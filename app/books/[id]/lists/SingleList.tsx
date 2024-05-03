"use client";

import bookImage from "../../../../public/book.jpg";
import Image from "next/image";

const SingleList = ({
  title,
  bookCount,
}: {
  title: string;
  bookCount: number;
}) => {
  return (
    <div className="h-min w-full bg-[#F8FAE5] border border-gray-200 rounded-xl shadow p-1 ps-3.5 text-gray-700 overflow-hidden cursor-pointer">
      <div className="flex flex-row gap-x-3">
        <div className="relative h-[130px] basis-1/3 items-center my-2">
          <Image
            width={100}
            height={130}
            src={bookImage}
            className="h-[130px] w-[100px] z-[3] rounded-lg border border-[#76453B] absolute"
            alt="book image"
          />
          <div className="h-[120px] z-[2] w-[100px] top-[5px] left-[10px] rounded-lg border border-[#76453B] absolute bg-[#B19470]"></div>
          <div className="h-[110px] z-[1] w-[100px] top-[10px] left-[20px] rounded-lg border border-[#76453B] absolute bg-[#B19470]"></div>
        </div>
        <div className="basis-2/3 flex flex-col gap-y-2">
          <div>
            <button className="float-right">
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                id="edit-alt-6"
                data-name="Flat Line"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="secondary"
                    d="M20,4h0a3,3,0,0,0-4.24,0L8.3,11.47l4.24,4.24L20,8.24A3,3,0,0,0,20,4Z"
                    style={{ fill: "#76453B", strokeWidth: 2 }}
                  ></path>
                  <path
                    id="primary"
                    d="M5.47,14.3l4.24,4.24L7.24,21H3V16.76ZM20,4h0a3,3,0,0,0-4.24,0L8.3,11.47l4.24,4.24L20,8.24A3,3,0,0,0,20,4Z"
                    style={{
                      fill: "none",
                      stroke: "#000000",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                    }}
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="tracking-wide mx-2">
            <p className="text-[15px] line-clamp-3 font-medium">{title}</p>
            <p className="text-gray-400 text-[13px]">{bookCount} stories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
