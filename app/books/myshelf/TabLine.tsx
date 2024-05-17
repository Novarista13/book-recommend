"use client";
import { Tabs, TabItem } from "flowbite-react";
import NotesPage from "./notes/NotesPage";
import Books from "./allBooks/books";
import Lists from "./lists/Lists";
import Favorites from "./favorites/Favorites";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "../[id]/bookOverview/reviews/Reviews";
import { bookType } from "@/types/bookTypes";

export default function TabLine() {
  const [books, setBooks] = useState<bookType[]>([]);
  const [error, setError] = useState("");
  const contentRef = useRef(null);
  const isVisible = useIsVisible(contentRef);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/api/lists?all=true");
        let data = res.data;
        setBooks(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();
  }, [isVisible]);

  const removeFavorite = (id: number) => {
    setBooks(
      books?.filter((b) => !(b.book.id === id && b.listType === "Favorites"))
    );
  };

  const tabItems = [
    {
      title: "All Books",
      isActive: true,
      component: <Books books={books} removeFavorite={removeFavorite} />,
    },
    {
      title: "Favourite",
      isActive: false,
      component: (
        <Favorites
          contentRef={contentRef}
          books={books}
          removeFavorite={removeFavorite}
        />
      ),
    },
    {
      title: "Lists",
      isActive: false,
      component: <Lists removeFavorite={removeFavorite} />,
    },
    // {
    //   title: "Notes & Bookmarks",
    //   isActive: false,
    //   component: <NotesPage />,
    // },
  ];
  return (
    <Tabs
      style="underline"
      className="w-full mt-2"
      theme={{
        tablist: {
          base: "flex flex-wrap -mb-px flex-row border-none gap-x-10",
          tabitem: {
            base: "inline-block cursor-pointer p-2  hover:text-[burlywood] ",
            styles: {
              underline: {
                active: {
                  on: " text-[burlywood] border-[burlywood] border-b-2 active",
                  off: "border-b-2 border-transparent text-white hover:border-[burlywood]  hover:text-[burlywood]",
                },
              },
            },
          },
        },
      }}
    >
      {tabItems.map((tab) => (
        <TabItem key={tab.title} active={tab.isActive} title={tab.title}>
          {tab.component}
        </TabItem>
      ))}
    </Tabs>
  );
}
