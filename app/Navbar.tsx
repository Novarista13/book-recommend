"use client";
import React, { useState } from "react";
import SigninButton from "./components/signInButton";
import Brand from "./components/brand";
import TopBarSearch from "./components/topBarSearch";
import SideBarSearch from "./components/sideBarSearch";
import NavFooter from "./components/navFooter";
import NavLinks from "./components/navLinks";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [showSide, setShowSide] = useState(false);

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
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
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
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Brand />
            <TopBarSearch />
          </div>
          <SigninButton />
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
          <SideBarSearch />
          <NavLinks />
        </div>
        <NavFooter />
      </aside>
      <main
        className="p-2 pr-4 md:ml-[200px] h-auto pt-[62px]"
        onClick={handleMainClick}
      >
        {children}
      </main>
    </div>
  );
};

export default Navbar;
