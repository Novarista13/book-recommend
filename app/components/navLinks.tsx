import React from "react";
import { sideData } from "../data/sidebar-data";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const currentPath = usePathname();
  return (
    <ul className="space-y-2">
      {sideData.map((s) => (
        <li key={s.title}>
          <Link
            href={s.href ? s.href : "#"}
            className={`flex items-center p-2 text-base font-medium text-[#76453B] rounded-lg dark:text-white hover:text-[#F8FAE5]  hover:bg-[#76453B] dark:hover:bg-gray-700 group focus:bg-[#76453B] dark:focus:bg-gray-700 focus:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470]
                  ${
                    currentPath === s.href &&
                    "bg-[#76453B] text-[#F8FAE5] ring-2 ring-[#B19470]"
                  }
                  `}
          >
            <svg
              fill="currentColor"
              viewBox={s.viewBox}
              className={`w-6 h-6 text-[#76453B] transition duration-75 dark:text-gray-400 group-hover:text-[#F8FAE5] dark:group-hover:text-white group-focus:text-[#F8FAE5]
                    ${currentPath === s.href && "text-[#F8FAE5]"}`}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d={s.svg} fill="currentColor"></path>
            </svg>
            <span className="ml-3">{s.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
