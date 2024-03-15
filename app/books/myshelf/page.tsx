import React from "react";
import TabLine from "./TabLine";

const page = () => {
  return (
    <div className="md:ml-[24px] text-normal my-5 font-medium ">
      <p className="text-2xl mb-1 font-extrabold text-left text-[#F8FAE5]">
        Your Shelf
      </p>
      <TabLine />
    </div>
  );
};

export default page;
