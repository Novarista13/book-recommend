import React from "react";

interface ChildProps {
  filterBook: (title: string) => void;
  toggle: (e: { target: any }) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  inputPlace: string;
}

const SearchForm: React.FC<ChildProps> = ({
  filterBook,
  toggle,
  inputRef,
  inputPlace,
}) => {
  return (
    <form
      className={
        inputPlace === "top" ? "hidden md:block md:pl-2 " : "md:hidden mb-2"
      }
    >
      <label
        htmlFor={inputPlace === "top" ? "topbar-search" : "sidebar-search"}
        className="sr-only"
      >
        Search
      </label>
      <div className={`relative ${inputPlace === "top" && "md:w-96"}`}>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-[#76453B] dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          ref={inputRef}
          name="title"
          id="topbar-search"
          aria-autocomplete="both"
          aria-haspopup="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="accent-[#76453B] placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full pl-10 p-2.5 "
          placeholder="Atomic Habit"
          onChange={(e) => filterBook(e.target.value)}
          onClick={(e) => toggle}
        />
      </div>
    </form>
  );
};

export default SearchForm;
