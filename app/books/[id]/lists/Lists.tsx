"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SingleList from "./SingleList";


const Lists = ({ bookId }: { bookId: number }) => {
  const [lists, setLists] = useState<{ [key: string]: { id: number }[] }>({});
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/api/lists?bookId=${bookId}`);
        let data = res.data;
        setLists(data);
      } catch (error) {
        setError("Fetching Data not successfull!");
      }
    })();
  }, []);

  return (
    <div className=" overflow-y-auto max-h-[400px]">
      <div className="columns-1 md:columns-2 gap-6 space-y-6 py-2">
        {Object.keys(lists).map((keyName) => (
          <SingleList
            key={keyName}
            title={keyName}
            bookCount={lists[keyName]?.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Lists;
