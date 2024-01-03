"use client";
import { Avatar, Dropdown } from "flowbite-react";
import React, { useState } from "react";
import Image from "next/image";
import { sideData } from "./data/sidebar-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import books from "../public/books.svg";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [showSide, setShowSide] = useState(false);

  const currentPath = usePathname();

  const handleCloseSide = () => setShowSide(false);
  const handleShowSide = () => setShowSide(true);

  function handleMainClick() {
    showSide && handleCloseSide();
  }

  return (
    <div className="antialiased">
      <nav className="bg-[#F8FAE5] border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-[#76453B] rounded-lg cursor-pointer md:hidden hover:text-[#F8FAE5] hover:bg-[#76453B] focus:bg-[#76453B] dark:focus:bg-gray-700 focus:text-[#F8FAE5] focus:ring-2 focus:ring-[#F8FAE5] dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={showSide ? handleCloseSide : handleShowSide}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a
              href="https://flowbite.com"
              className="flex items-center justify-between mr-4"
            >
              <Image src={books} className=" h-10" alt="book logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AetherReads
              </span>
            </a>
            <form action="#" method="GET" className="hidden md:block md:pl-2 ">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative md:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-[#76453B] dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <Dropdown
            arrowIcon={false}
            className="ring-2 ring-[#76453B] bg-[#F8FAE5] text-[#76453B]"
            inline
            label={
              <Avatar
                alt="User settings"
                className="hover:ring-4 hover:rounded-full hover:ring-[#76453B] "
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </div>
            <Dropdown.Divider className="bg-[#76453B]" />
            {["Home", "Settings"].map((i) => (
              <Dropdown.Item
                key={i}
                className=" focus:bg-[#76453B] focus:text-[#F8FAE5] "
              >
                {i}
              </Dropdown.Item>
            ))}

            <Dropdown.Divider className="bg-[#76453B]" />
            <Dropdown.Item className=" focus:bg-[#76453B] focus:text-[#F8FAE5] ">
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </nav>
      <aside
        className={`fixed top-0 left-0 z-40 w-52 h-screen pt-14 transition-transform ${
          showSide ? "" : "-translate-x-full"
        } bg-[#F8FAE5] border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-[#F8FAE5] dark:bg-gray-800">
          <form action="#" method="GET" className="md:hidden mb-2">
            <label htmlFor="sidebar-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-[#76453B] dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
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
        </div>
        <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-[#F8FAE5] dark:bg-gray-800 z-20">
          <a
            href="#"
            className="inline-flex justify-center p-2 text-[#76453B] rounded cursor-pointer hover:text-[#F8FAE5] dark:text-gray-400dark:hover:text-white hover:bg-[#76453B] dark:hover:bg-gray-600"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
          </a>
          <a
            href="#"
            data-tooltip-target="tooltip-settings"
            className="inline-flex justify-center p-2 text-[#76453B] rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-[#F8FAE5] hover:bg-[#76453B] dark:hover:bg-gray-600"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
          >
            Settings page
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </aside>
      <main className="p-2 pr-4 md:ml-56 h-auto pt-20 " onClick={handleMainClick}>
        {children}
      </main>
    </div>
  );
};

export default Navbar;
