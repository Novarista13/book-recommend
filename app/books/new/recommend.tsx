import React from "react";
import SingleBook from "./SingleBook";

const Recommend = () => {
  return (
    <div className="basis-1/2">
      <p className="text-white text-[40px] font-extrabold md:mb-12">
        Your <span className="text-[#F8FAE5]">Recommendation</span>
        <br />
        Helps Other to Read
      </p>
      <p className="text-white my-4">Your Previous Recommendations</p>
      <div className="flex flex-row gap-x-8  flex-nowrap">
        <SingleBook />
        <SingleBook />
        <SingleBook />
      </div>
    </div>
  );
};

export default Recommend;
