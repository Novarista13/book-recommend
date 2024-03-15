import Image from "next/image";
import React from "react";
import bookImage from "../../../public/book.jpg";

const AboutAuthor = ({
  author,
}: {
  author: { name: string; about: string };
}) => {
  return (
    <div className="w-full h-full bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left p-4 pt-1 pb-2">
      <h3 className="font-bold">About Author</h3>
      <div className="mt-1 mb-2">
        <p
          className="text-[15px] font-medium"
          style={{
            display: "inline",
            borderImageRepeat: "stretch",
            borderImageSlice: "0 fill",
            borderImageSource:
              "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg)",
            borderImageWidth: "calc(100% - 6px) 0 0",
            borderImageOutset: "3px",
          }}
        >
          {author?.name}
        </p>
        <p className="text-[13px]">{author?.about}</p>
      </div>
      <div>
        <p className="text-sm font-bold">other books</p>
        <div className="flex flex-row gap-x-4 pt-1">
          <Image width={50} height={50} src={bookImage} alt="book image" />
          <Image width={50} height={50} src={bookImage} alt="book image" />
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
