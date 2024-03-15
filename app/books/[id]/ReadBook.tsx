"use client";

import bookImage from "../../../public/book.jpg";
import Image from "next/image";

const ReadBook = ({ book }: any) => {
  return (
    <div className="w-[190px] min-w-[190px] bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col text-left p-4 px-7 gap-y-3">
      <div>
        <h3 className="font-medium">Read This book</h3>
        <div className="flex flex-row items-center gap-x-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="basis-1/4 w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke-width="0"></g>
            <g stroke-linecap="round" stroke-linejoin="round"></g>
            <g>
              <path
                d="M3 3H8.4C9.35478 3 10.2705 3.37928 10.9456 4.05442C11.6207 4.72955 12 5.64522 12 6.6V21C12 20.2839 11.7155 19.5972 11.2092 19.0908C10.7028 18.5845 10.0161 18.3 9.3 18.3H3V3Z"
                stroke="#76453B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21 3H15.6C14.6452 3 13.7295 3.37928 13.0544 4.05442C12.3793 4.72955 12 5.64522 12 6.6V20.7C12 19.9839 12.2845 19.2972 12.7908 18.7908C13.2972 18.2845 13.9839 18 14.7 18H21V3Z"
                stroke="#76453B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <a
            href="#"
            className="basis-3/4 text-sm underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wattpad
          </a>
        </div>
      </div>
      <div className=" mb-2">
        <p className="text-[15px]">Translated in -</p>
        <ul className="space-y-2 my-1 text-left ">
          {["Burmese", "VietNam"].map((lang) => (
            <li key={lang} className="ps-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span className="text-[14px]">{lang}</span>
              </div>
              <ul className="ps-6 text-[13px]">
                <li>
                  <a
                    href="#"
                    className="basis-3/4 text-sm underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wattpad
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReadBook;
