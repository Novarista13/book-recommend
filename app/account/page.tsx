import React from "react";
import UserInfo from "./UserInfo";
import Nav from "./nav";

const page = () => {
  return (
    <div className="max-w-[800px] ml-7 mt-5 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow">
      <Nav />
      <UserInfo />
    </div>
  );
};

export default page;


