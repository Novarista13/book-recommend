"use client";

import bookImage from "../../../public/book.jpg";
import Image from "next/image";

const SingleBook = ({ book }: any) => {
  return (
    <div className="basis-[31%] bg-[#F8FAE5] border border-gray-200 rounded-xl shadow p-2 px-4 ">
      <div className="flex flex-row items-center gap-x-4 my-2">
        <Image
          width={80}
          height={10}
          src={bookImage}
          className=" h-[80px] w-[80px] basis-1/3 rounded-lg border border-[#76453B]"
          alt="book image"
        />
        <div className="basis-2/3 leading-6">
          <p className="text-[15px] line-clamp-2 font-medium text-gray-700">
            Don’t Make Me Think
          </p>
          <p className="text-gray-500 text-[11px]">by Steve Krug, 2000</p>
        </div>
      </div>
      <div>
        <p className="line-clamp-4 text-[13px] my-1 text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>

        <div className="text-center my-3 mx-auto flex flex-row gap-x-3 justify-center items-center">
          <p className="bg-[#42BB4E] h-[29px] text-white text-[13px] p-1 px-3 rounded-md">
            completed
          </p>
          <button className="text-[#76453B] h-[29px] flex items-center border-2 border-[#76453B] hover:text-white hover:bg-[#76453B] focus:ring-2 focus:ring-[#B19470] text-[13px] p-1 px-4 rounded-md">
            Details
          </button>
          <button>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.645 21.4107L11.6384 21.4072L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4072L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z"
                fill="#F34040"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
