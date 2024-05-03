"use client";
import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import axios from "axios";
import AddListSingle from "./AddListSingle";

const AddList = ({ bookId }: { bookId: number }) => {
  const [lists, setLists] = useState<{ [key: string]: { id: number }[] }>({});
  const [reload, setReload] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/api/lists");
        let data = res.data;
        console.log("it's running");
        setLists(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();
  }, [reload]);

  return (
    <div className="self-center">
      <Dropdown
        label="add to list"
        dismissOnClick={false}
        className=" bg-[#F8FAE5] rounded-lg border-2 border-[#76453B] "
        renderTrigger={() => (
          <div className="group">
            <button className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-md text-sm px-3 py-2  me-2 mb-2  focus:outline-none ">
              Add to List
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                className="pl-1 inline group-hover:text-white w-4 h-4 text-[#76453B] "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.17585 6.38027C6.79349 6.73088 6.20651 6.73088 5.82415 6.38027L1.03312 1.98704C0.360988 1.37072 0.797034 0.25 1.70896 0.25L11.291 0.25C12.203 0.25 12.639 1.37072 11.9669 1.98704L7.17585 6.38027Z" />
              </svg>
            </button>
          </div>
        )}
      >
        {Object.keys(lists).map((keyName) => (
          <AddListSingle
            lists={lists}
            keyName={keyName}
            bookId={bookId}
            key={keyName}
          />
        ))}
      </Dropdown>
    </div>
  );
};

export default AddList;
