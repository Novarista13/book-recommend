"use client";
import React, { useState } from "react";
import { Tabs } from "flowbite-react";

{
  /* <li
            className="underline font-medium decoration-1 underline-offset-[10px] "
            key={i}
          >
            {i}
          </li> */
}

const Nav = () => {
  const [tab, setTab] = useState("Account  Setting");
  return (
    <div className="m-3 text-sm my-6 mx-5">
      <ul className="flex flex-wrap -mb-px gap-x-5">
        {[
          "Account  Setting",
          "Login & Security",
          "Notifications",
          "Interface",
        ].map((t) => (
          <li key={t}>
            <a
              className={`inline-block font-semibold border-b-2 py-1 p-2 hover:border-[#76453B] cursor-pointer  hover:text-[#76453B] ${
                tab == t
                  ? "text-[#76453B] border-[#76453B]"
                  : "text-[#B19470] border-[#B19470]"
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
};

export default Nav;
