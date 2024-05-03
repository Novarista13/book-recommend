"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Dropdown } from "flowbite-react";
import axios from "axios";

const AddListSingle = ({
  lists,
  keyName,
  bookId,
}: {
  lists: { [key: string]: { id: number }[] };
  // setLists: React.Dispatch<
  //   React.SetStateAction<{ [key: string]: { id: number }[] }>
  // >;
  keyName: string;
  bookId: number;
}) => {
  const [bookIncluded, setBookIncluded] = useState(false);
  useMemo(() => {
    lists[keyName].map((b: { id: number }) => {
      if (bookId == b.id) setBookIncluded(true);
    });
  }, [lists]);

  const onSubmit = async () => {
    setBookIncluded(!bookIncluded);

    if (bookIncluded) {
      await axios.delete(`/api/lists?listType=${keyName}&bookId=${bookId}`);
      lists[keyName] = lists[keyName].filter(
        (b: { id: number }) => b.id !== bookId
      );
    } else {
      await axios.post("/api/lists", {
        listType: keyName,
        bookIdArray: [bookId],
      });
      lists[keyName] = [...lists[keyName], { id: bookId }];
    }
  };

  return (
    <Dropdown.Item
      className="hover:bg-[#76453B] hover:text-[#F8FAE5] focus:bg-[#76453B] focus:text-[#F8FAE5] group"
      onClick={onSubmit}
    >
      <span className="px-3 capitalize">{keyName}</span>
      {bookIncluded && (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 float-right group-hover:text-[#F8FAE5] text-[#76453B]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M22 7L11.5 17.5L7.5 13.5M6 17.5L2 13.5M16.5 7L11.5 12"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      )}
    </Dropdown.Item>
  );
};

export default AddListSingle;
