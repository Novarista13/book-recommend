import React from "react";
import Form from "./form";
import Link from "next/link";
import Image from "next/image";
import books from "../../public/books.svg";

const page = () => {
  return (
    <div className="grid place-content-center w-full">
      <div className="min-w-[400px] ml-7 mt-5 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow">
        <div className="max-w-[300px] mx-auto my-7">
          <a href="#" className="flex items-center justify-center mr-4">
            <Image
              src={books}
              priority={true}
              style={{ width: "auto" }}
              className="h-15"
              alt="book logo"
            />
            <span className="self-center text-2xl ml-2 font-semibold whitespace-nowrap dark:text-white">
              AetherReads
            </span>
          </a>
          <div className="text-center my-7">
            <p className="text-[16px] my-3">Registration</p>
            <p className="text-[12px] text-[#4c4c4c]">
              For Both Staff & Students
            </p>
          </div>
          <Form />
          <div
            className="flex flex-row text-[#4c4c4c] text-[12px]"
            style={{ marginTop: "30px", marginBottom: "15px" }}
          >
            <div className="basis-3/5">
              Already a User?
              <Link href="#" className="inline underline underline-offset-2">
                Login now
              </Link>
            </div>
            <div className="flex justify-end items-center basis-2/5">
              <Link href="#">Use as Guest</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
