import React from "react";
import SingleBook from "./SingleBook";

const page = () => {
  return (
    <div>
      
      <div className="flex flex-row  items-center gap-x-10 p-4 text-white">
        <div className="basis-[369px]  ">Title</div>
        <div className="basis-1/12 ">Ratings</div>
        <div className="basis-3/12 ">Category</div>
        <div className="basis-1/12 ">Availability</div>
        <div className="basis-[413px] ">Status</div>
      </div>
      <SingleBook />
    </div>
  );
};

export default page;
