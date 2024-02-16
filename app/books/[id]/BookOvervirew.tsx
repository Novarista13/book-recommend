import React from "react";
import Link from "next/link";

const BookOvervirew = () => {
  return (
    <>
      <div className="flex flex-row gap-x-9 my-5">
        {[
          { title: "Publish Date", content: "2000" },
          { title: "Publisher", content: "New Riders Press" },
          { title: "Language", content: "English" },
          { title: "Pages", content: "216" },
        ].map((i) => (
          <div
            key={i.title}
            className="w-full bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col text-center py-2 p-4 gap-x-14"
          >
            <p className="text-xs text-gray-500">{i.title}</p>
            <p className="text-sm">{i.content}</p>
          </div>
        ))}
      </div>
      <div className="text-white  leading-none">
        <p className="text-xs mb-4">
          Previews available in:{" "}
          <Link href="#" className="hover:underline text-[#F8FAE5]">
            {" "}
            English
          </Link>
        </p>
        <p className="text-sm text-wrap inline">
          Since Don’t Make Me Think was first published in 2000, developers have
          relied on usability guru Steve Krug’s guide to help them understand
          the principles of intuitive navigation and information design...
        </p>
        <Link href="#" className="hover:underline text-sm text-[#F8FAE5]">
          {" "}
          Read more
        </Link>
      </div>
    </>
  );
};

export default BookOvervirew;
