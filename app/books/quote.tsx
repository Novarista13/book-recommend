"use client";

import { Card } from "flowbite-react";

const Quote = () => {
  return (
    <Card href="#" className="max-w-sm bg-[#F8FAE5] hover:bg-[#e5e9d2] ">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Today’s Quote
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        “There is more treasure in books than in all the pirate’s loot on
        Treasure Island.”
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="ml-[68%]">-Walt Disney</span>
      </p>
    </Card>
  );
};

export default Quote;
