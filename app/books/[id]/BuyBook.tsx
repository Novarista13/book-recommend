"use client";

import bookImage from "../../../public/book.jpg";
import Image from "next/image";

const BuyBook = ({ book }: any) => {
  return (
    <div className="w-[190px] min-w-[190px] bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col text-left p-4 gap-y-3">
      <h3 className="font-bold">Buy this book Online</h3>
      <div className="flex flex-row items-center gap-x-2">
        <svg
          fill="#000000"
          viewBox="0 0 32 32"
          data-name="Layer 2"
          className="basis-1/4"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.44,9.11,10.25,10a1.3,1.3,0,0,0-.42.1C9,7.49,8.21,7.36,5.41,7.19c-1.61-.1-1.6,2.4,0,2.5s1.64.29,2.23,1.78c.42,1.09.66,2.29,1,3.41.14.47.27.95.41,1.42a.88.88,0,0,0,.05.15c.45,1.58.9,3.16,1.32,4.75a1.17,1.17,0,0,0,1.21,1.26l1.91,0a1.23,1.23,0,1,0,2.27,0l2.8,0a1.23,1.23,0,1,0,2.25,0,4.13,4.13,0,0,0,2.47-.54c1-.77,1.61-3.14,2.08-4.34a68.54,68.54,0,0,0,2.25-6.85A1.26,1.26,0,0,0,26.44,9.11ZM21.7,19.89c-.92.51-3.86,0-4.95,0L12.66,20c-.25-.91-.5-1.82-.76-2.73l6.69-.94c1.59-.22.91-2.63-.66-2.41l-6.71.94-.69-2.35,14.22-.76c-.28,1-.59,2-.92,2.92C23.41,15.81,22.7,19.33,21.7,19.89Z"></path>
        </svg>
        <a
          href="#"
          className="basis-3/4 text-sm underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <svg
          fill="#000000"
          viewBox="0 0 32 32"
          data-name="Layer 2"
          className="basis-1/4"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.44,9.11,10.25,10a1.3,1.3,0,0,0-.42.1C9,7.49,8.21,7.36,5.41,7.19c-1.61-.1-1.6,2.4,0,2.5s1.64.29,2.23,1.78c.42,1.09.66,2.29,1,3.41.14.47.27.95.41,1.42a.88.88,0,0,0,.05.15c.45,1.58.9,3.16,1.32,4.75a1.17,1.17,0,0,0,1.21,1.26l1.91,0a1.23,1.23,0,1,0,2.27,0l2.8,0a1.23,1.23,0,1,0,2.25,0,4.13,4.13,0,0,0,2.47-.54c1-.77,1.61-3.14,2.08-4.34a68.54,68.54,0,0,0,2.25-6.85A1.26,1.26,0,0,0,26.44,9.11ZM21.7,19.89c-.92.51-3.86,0-4.95,0L12.66,20c-.25-.91-.5-1.82-.76-2.73l6.69-.94c1.59-.22.91-2.63-.66-2.41l-6.71.94-.69-2.35,14.22-.76c-.28,1-.59,2-.92,2.92C23.41,15.81,22.7,19.33,21.7,19.89Z"></path>
        </svg>
        <a
          href="#"
          className="basis-3/4 text-sm underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </div>
      <p className="text-[10px] mb-3">
        When you buy books using these links the Internet Archive may earn a
        small commission.
      </p>
    </div>
  );
};

export default BuyBook;
