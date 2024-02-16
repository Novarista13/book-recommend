import React from "react";
import SingleNote from "./SingleNote";

const colorClasses = [
  "bg-red-400",
  "bg-blue-400",
  "bg-orange-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-lime-400",
  "bg-fuchsia-400",
  "bg-teal-400",
];

const notes = [
  "Books are like portals to alternate dimensions, each page a gateway to new worlds, ideas, and emotions. They hold within their pages the power to transport us to distant lands, to ignite our imaginations, and to challenge our perspectives.",
  "In a quiet corner of the library, nestled among towering shelves filled with books of every shape and size, lies a treasure trove of stories waiting to be discovered.",

  "From the moment we learn to read, books become our companions, our teachers, and our friends. They are there to comfort us in times of sorrow, to inspire us in moments of doubt, and to celebrate with us in times of joy. Whether it's a classic novel that withstands the test of time or a contemporary bestseller that captures the zeitgeist.",

  "As the sun sets and the world grows quiet, there's nothing quite like curling up with a good book and getting lost in its pages. Whether it's a paperback novel that fits perfectly in your hands or a weighty tome that demands to be savored. ",

  "In a world filled with constant noise and distraction, books offer a sanctuary of silence and solitude. They invite us to slow down, to disconnect from the chaos of everyday life, and to immerse ourselves in the quiet beauty of the written word.",
  "In a world filled with constant noise and distraction, books offer a sanctuary of silence and solitude. They invite us to slow down, to disconnect from the chaos of everyday life, and to immerse ourselves in the quiet beauty of the written word.",
];

const NotesPage = () => {
  return (
    <div className="mt-20">
      <p className="text-2xl my-8 font-extrabold text-left text-[#F8FAE5]">
        Notes & Bookmarks
      </p>
      <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
        {notes.map((n, id) => (
          <SingleNote key={id} paragraph={n} bgColor={colorClasses[id]} />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
