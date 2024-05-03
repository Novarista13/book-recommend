import React from "react";
import check from "../../../../public/check.svg";
import cross from "../../../../public/cross.svg";
import Image from "next/image";
import AddList from "./AddList";

const AboutBook = ({
  book,
}: {
  book: {
    id: number;
    title: string;
    availability: string;
    status: string;
    author: { name: string };
  };
}) => {
  return (
    <div className="w-auto">
      <div className="max-w-[380px] flex flex-col gap-y-5">
        <div>
          <p className="text-3xl text-white mb-1">{book?.title}</p>
          <p className="text-gray-100 text-sm">By {book?.author?.name}</p>
        </div>
        <div className="flex flex-row text-[12.5px] gap-x-3 text-white">
          <div className="flex items-center">
            <svg
              className="w-3.5 h-3.5 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-3.5 h-3.5 text-yellow-300 ms-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-3.5 h-3.5 text-yellow-300 ms-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-3.5 h-3.5 text-yellow-300 ms-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-3.5 h-3.5 text-gray-300 ms-0.5 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p>.0 Ratings</p>
          </div>

          <p>25 Currently reading</p>
          <p>119 Have read</p>
        </div>
        <div className="text-white flex flex-row gap-x-10 items-start">
          <div className="flex flex-col gap-y-1">
            <p className="text-[14px]">Availability</p>
            {[
              { label: "Hard Copy", value: "HardCopy" },
              { label: "E-Book", value: "EBook" },
              { label: "Audio Book", value: "Audiobook" },
            ].map((f) => (
              <p key={f.value} className="text-[13px]">
                {book?.availability.includes(f.value) ? (
                  <Image
                    src={check}
                    className="inline w-3.5 me-1"
                    alt="availability"
                  />
                ) : (
                  <Image
                    src={cross}
                    className="inline w-3.5 me-1"
                    alt="availability"
                  />
                )}
                {f.label}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-4 h-full">
            <p className="text-[14px]">Status</p>
            <p className="bg-[#42BB4E] text-white text-[13px] p-1 pt-0.5 px-2 rounded-md">
              {book?.status}
            </p>
          </div>
          <AddList bookId={book?.id} />
        </div>
        <div className="flex flex-row gap-x-6">
          <div className="w-full  border border-[#F8FAE5] rounded-lg shadow  text-center py-2 p-4 flex flex-row items-center gap-x-3">
            <p className="text-[14px] text-[#F8FAE5]">Language: </p>
            <p className="text-[15px] text-white font-medium">English</p>
          </div>
          <button
            type="button"
            className="bg-[#42BB4E] w-full text-white hover:bg-[#2f9b3a] focus:ring-2 focus:ring-white font-medium rounded-lg px-5 py-0 me-2 focus:outline-none flex flex-row gap-x-2 items-center"
          >
            <span className="border-r-2 pr-3">Read Now</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="p-1 pr-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_68_1200)">
                <path
                  d="M20.3125 15.1042H18.2292C17.6539 15.1042 17.1875 15.5706 17.1875 16.1459V23.4376C17.1875 24.0129 17.6539 24.4792 18.2292 24.4792H20.3125C20.8878 24.4792 21.3542 24.0129 21.3542 23.4376V16.1459C21.3542 15.5706 20.8878 15.1042 20.3125 15.1042Z"
                  fill="white"
                />
                <path
                  d="M23.4377 16.6667H22.396V22.9167H23.4377C23.7139 22.9167 23.9789 22.807 24.1742 22.6117C24.3696 22.4163 24.4793 22.1513 24.4793 21.8751V17.7084C24.4793 17.4321 24.3696 17.1672 24.1742 16.9718C23.9789 16.7765 23.7139 16.6667 23.4377 16.6667Z"
                  fill="white"
                />
                <path
                  d="M6.771 15.1042H4.68766C4.11237 15.1042 3.646 15.5706 3.646 16.1459V23.4376C3.646 24.0129 4.11237 24.4792 4.68766 24.4792H6.771C7.34629 24.4792 7.81266 24.0129 7.81266 23.4376V16.1459C7.81266 15.5706 7.34629 15.1042 6.771 15.1042Z"
                  fill="white"
                />
                <path
                  d="M0.520996 17.7083V21.8749C0.520996 22.1512 0.630743 22.4161 0.826093 22.6115C1.02144 22.8068 1.2864 22.9166 1.56266 22.9166H2.60433V16.6666H1.56266C1.2864 16.6666 1.02144 16.7763 0.826093 16.9717C0.630743 17.167 0.520996 17.432 0.520996 17.7083ZM19.4637 10.3385C19.6041 10.7916 19.848 11.2059 20.1761 11.5485C20.5043 11.8911 20.9077 12.1526 21.3543 12.3124C21.3543 9.96415 20.4215 7.71206 18.761 6.05158C17.1005 4.3911 14.8484 3.45825 12.5002 3.45825C10.1519 3.45825 7.8998 4.3911 6.23932 6.05158C4.57884 7.71206 3.646 9.96415 3.646 12.3124C4.09171 12.152 4.49404 11.8901 4.82124 11.5475C5.14844 11.205 5.39156 10.7911 5.53141 10.3385C7.65641 3.50513 17.3647 3.53117 19.4637 10.3385Z"
                  fill="white"
                />
                <path
                  d="M20.9689 4.03128C13.4741 -3.46351 0.520996 1.82815 0.520996 12.5V15.9063C1.14079 15.5521 1.59912 15.625 2.60433 15.625C2.60433 12.3229 2.16683 8.85419 5.50537 5.50524C11.672 -0.677053 22.396 3.64586 22.396 12.5V15.625C23.4064 15.625 23.8699 15.5573 24.4793 15.9063C24.4793 12.2709 25.0002 8.03648 20.9689 4.03128Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_1200">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBook;
