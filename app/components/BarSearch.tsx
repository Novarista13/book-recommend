import axios from "axios";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SearchForm from "./SearchForm";

type searchForm = {
  id: number;
  title: string;
  rating: string;
  availability: string;
  status: string;
  author: { name: string };
  publishedYear: number;
  cover: string;
}[];

const BarSearch = ({ inputPlace }: { inputPlace: string }) => {
  const [books, setBooks] = useState<searchForm>([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let [filterdBooks, setFilterdBooks] = useState<searchForm>([]);
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/api/books");
        let data = res.data;
        setBooks(data);
        setFilterdBooks(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();

    // this is aiming to close dropdown when you click on screen other than input
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  // added toggel so that the dropdown will close when you click on other than input
  function toggle(e: { target: any }) {
    setIsOpen(e && e.target === inputRef.current);
  }

  function filterBook(title: string) {
    console.log(title);
    let result = books.filter((item: { title: string }) => {
      return item.title.toLowerCase().includes(title.toLowerCase());
    });
    setFilterdBooks(result.length > 0 ? result : books);
  }

  return (
    <div className="dropdown">
      <div className="control">
        <SearchForm
          inputPlace={inputPlace}
          filterBook={filterBook}
          inputRef={inputRef}
          toggle={toggle}
        />
      </div>
      <div
        className={`options bg-[#F8FAE5] rounded-lg border-2 border-[#76453B] ${
          isOpen ? "open" : ""
        }`}
      >
        <ul className="py-1 focus:outline-none">
          {filterdBooks.map((book) => (
            <li key={book.title}>
              <button
                type="button"
                onClick={() => router.push(`/books/${book?.id}`)}
                className="flex items-center justify-start py-2 px-4 text-sm  cursor-pointer w-full  focus:outline-none hover:bg-[#76453B] hover:text-[#F8FAE5] focus:bg-[#76453B] focus:text-[#F8FAE5]"
              >
                <span className="px-3 capitalize">{book.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BarSearch;
