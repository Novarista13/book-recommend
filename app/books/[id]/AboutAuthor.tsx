import Image from "next/image";
import React from "react";
import bookImage from "../../../public/book.jpg";

const AboutAuthor = () => {
  return (
    <div className="w-[325px] h-auto bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col text-left p-4 py-2 gap-y-2">
      <h3 className="font-bold">About Author</h3>
      <div className="flex flex-row gap-x-4 items-center">
        <h3>Steve Krug</h3>
        <Image
          width={32}
          height={32}
          src={bookImage}
          className="inline"
          alt="book image"
        />
      </div>
      <p className="text-[12px]">
        Steve Krug is a usability consultant who has more than 30 years of
        experience as a user advocate for companies like Apple, Netscape, AOL,
        Lexus, and others. Based in part on the success of his first book, Dont
        Make Me Think, he has become a highly sought-after speaker on usability
        design.
      </p>
      <div>
        <p className="text-sm font-bold">other books</p>
        <div className="flex flex-row gap-x-4 pt-3">
          <Image width={50} height={50} src={bookImage} alt="book image" />
          <Image width={50} height={50} src={bookImage} alt="book image" />
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
