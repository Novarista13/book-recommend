"use client";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Avatar, Rating } from "flowbite-react";

function checkOverflow(
  el:
    | {
        style: { overflow: string };
        clientWidth: number;
        scrollWidth: number;
        clientHeight: number;
        scrollHeight: number;
      }
    | null
    | undefined
) {
  if (el === undefined || el === null) return false;

  var curOverflow = el.style.overflow;

  if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";
  var isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

  el.style.overflow = curOverflow;

  return isOverflowing;
}

const SingleReview = ({ text }: { text: string }) => {
  const contentRef = useRef(null);
  const [textShow, setTextShow] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    setIsOverflowing(checkOverflow(contentRef.current));
  }, []);

  return (
    <div className="h-min w-full bg-[#F8FAE5] border border-gray-200 rounded-xl shadow p-2 px-4 overflow-hidden cursor-text">
      <div className="my-2 flex items-center">
        <Rating size="sm">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
      </div>
      <p
        className={`text-[15px] indent-3 text-[#76453B] font-medium ${
          textShow ? "line-clamp-none" : "line-clamp-6"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-7 float-left"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M8.09 11.6314H3.4C3.48 6.96144 4.4 6.19144 7.27 4.49144C7.6 4.29144 7.71 3.87144 7.51 3.53144C7.32 3.20144 6.89 3.09144 6.56 3.29144C3.18 5.29144 2 6.51144 2 12.3214V17.7114C2 19.4214 3.39 20.8014 5.09 20.8014H8.09C9.85 20.8014 11.18 19.4714 11.18 17.7114V14.7114C11.18 12.9614 9.85 11.6314 8.09 11.6314Z"
              fill="#76453B"
            ></path>
            <path
              d="M18.9086 11.6314H14.2186C14.2986 6.96144 15.2186 6.19144 18.0886 4.49144C18.4186 4.29144 18.5286 3.87144 18.3286 3.53144C18.1286 3.20144 17.7086 3.09144 17.3686 3.29144C13.9886 5.29144 12.8086 6.51144 12.8086 12.3314V17.7214C12.8086 19.4314 14.1986 20.8114 15.8986 20.8114H18.8986C20.6586 20.8114 21.9886 19.4814 21.9886 17.7214V14.7214C21.9986 12.9614 20.6686 11.6314 18.9086 11.6314Z"
              fill="#76453B"
            ></path>
          </g>
        </svg>
        <div
          ref={contentRef}
          className={` pt-2 ${textShow ? "max-h-auto" : "max-h-[145px]"}`}
        >
          {text}
        </div>
      </p>
      {isOverflowing && (
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setTextShow(!textShow);
          }}
          className="underline text-[14.5px] text-[#76453B]"
        >
          {textShow ? "read less" : "read more"}
        </Link>
      )}
      <div className="my-3 flex items-center space-x-3">
        <Avatar
          alt="User"
          className="hover:ring-4 hover:rounded-full hover:ring-[#76453B] "
          img="/pf_sample.jpg"
          rounded
        />
        <div className="flex items-center divide-x-2 divide-[#B19470]">
          <p className="pr-3 font-medium text-gray-900 dark:text-white">
            Micheal Gough
          </p>
          <p className="pl-2 text-sm text-[#B19470]">3/5/2024</p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
