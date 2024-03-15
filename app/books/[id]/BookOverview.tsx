import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Markdown from "react-markdown";

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

const BookOverview = ({
  book,
}: {
  book: {
    publishedYear: number;
    publishedPlatform: string;
    lang: string;
    parts: number;
  };
}) => {
  const contentRef = useRef(null);
  const [textShow, setTextShow] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    setIsOverflowing(checkOverflow(contentRef.current));
  }, []);

  return (
    <>
      <div className="flex flex-row gap-x-7 mb-3">
        {[
          { title: "Publish Date", content: book?.publishedYear ?? "-" },
          {
            title: "Published Platform",
            content: book?.publishedPlatform ?? "-",
          },
          { title: "Completely Translated", content: "-" },
          { title: "Parts", content: book?.parts ?? "-" },
        ].map((i) => (
          <div
            key={i.title}
            className="w-full bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col text-center py-2 p-4"
          >
            <p className="text-xs text-gray-500">{i.title}</p>
            <p className="text-sm">{i.content}</p>
          </div>
        ))}
      </div>
      <div className="text-white">
        <p className="text-[18px] font-medium mb-1">Description</p>
        <p
          className={`text-[16px] prose max-w-none prose-p:text-white prose-headings:text-[#F8FAE5] prose-headings:my-2 prose-ul:mb-2 prose-p:my-3 prose-ul:text-gray-200 prose-strong:text-[#F8FAE5] indent-6 leading-relaxed ${
            textShow
              ? "line-clamp-none max-h-auto"
              : "line-clamp-3 max-h-[75px]"
          }`}
          ref={contentRef}
        >
          <Markdown>{`**Title:** *The Ultimate Guide to Productivity: Mastering Your Time and Achieving Your Goals*

In *The Ultimate Guide to Productivity: Mastering Your Time and Achieving Your Goals*, author Sarah Johnson presents a comprehensive roadmap for maximizing efficiency and success in both personal and professional spheres. Divided into three main sections:

### Time Management Strategies
- Techniques such as the Pomodoro Technique
- Eisenhower Matrix
- Importance of prioritization

### Goal Setting Techniques
- SMART goals
- Visualization exercises
- Habit formation

### Productivity Tools and Resources
- Curated list of apps, books, and websites
- Expert advice on utilizing these resources effectively

With insightful anecdotes and expert advice, *The Ultimate Guide to Productivity* equips readers with the necessary tools to take control of their time, set meaningful goals, and achieve lasting success.
`}</Markdown>
        </p>
        {isOverflowing && (
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setTextShow(!textShow);
            }}
            className="underline text-[14.5px] text-[#F8FAE5]"
          >
            {textShow ? "read less" : "read more"}
          </Link>
        )}
      </div>
    </>
  );
};

export default BookOverview;
