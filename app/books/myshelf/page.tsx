import React from "react";
import Books from "./books";
import NavLine from "./NavLine";
import NotesPage from "./NotesPage";

const page = () => {
  return (
    <div className="md:ml-[24px] ">
      <NavLine />
      <Books />
      <NotesPage />
    </div>
  );
};

export default page;
