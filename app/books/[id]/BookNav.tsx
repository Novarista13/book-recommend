import React, { useState } from "react";
import BookOvervirew from "./BookOvervirew";

const BookNav = () => {
  const [tab, setTab] = useState("Overview");

  return (
    <>
      <div className="w-full bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left p-4 py-1">
        <ul className="flex flex-wrap -mb-px  gap-x-10">
          {[
            "Overview",
            "View 166 Editions",
            "Details",
            "4.1k Reviews",
            "Lists",
            "Related Books",
          ].map((item) => (
            <li key={item}>
              <a
                onClick={() => setTab(item)}
                key={item}
                className={`inline-block font-semibold border-b-2 py-1 px-2  hover:border-[#76453B] text-sm cursor-pointer  hover:text-[#76453B] ${
                  tab == item
                    ? "text-[#76453B] border-[#76453B]"
                    : "text-[#B19470] border-[#B19470]"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <BookOvervirew />
    </>
  );
};

export default BookNav;
