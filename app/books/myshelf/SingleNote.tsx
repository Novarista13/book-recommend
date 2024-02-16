import React from "react";

const SingleNote = ({ paragraph, bgColor }: any) => {
  return (
    <div className={`h-min w-full ${bgColor} rounded-lg p-6 overflow-hidden`}>
      <ul className="list-none border-l-2 border-white text-sm pl-4 py-1 mb-2">
        <li>Book: You don&apos;t know JS</li>
        <li>Page: 22</li>
        <li>Date: 12/2/2024</li>
      </ul>
      <p>{paragraph}</p>
    </div>
  );
};

export default SingleNote;
