"use client";
import React, { useState } from "react";

function NavLine() {
  const [tab, setTab] = useState("All Books");

  return (
    <div className="text-normal my-5 font-medium ">
      <p className="text-2xl mb-1 font-extrabold text-left text-[#F8FAE5]">
        Your Shelf
      </p>

      <ul className="flex flex-wrap flex-row gap-x-10">
        {[
          "All Books",
          "Favourite",
          "E-Books",
          "Audio Books",
          "Articles & Journals",
        ].map((t) => (
          <li key={t}>
            <a
              className={`inline-block cursor-pointer p-4  hover:text-[burlywood] ${
                tab == t ? "text-[burlywood]" : "text-white"
              }`}
              onClick={() => setTab(t)}
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavLine;
