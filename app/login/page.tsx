import React from "react";
import Form from "./form";
import Link from "next/link";
import Image from "next/image";
import books from "../../public/books.svg";
import GoogleLogin from "./googleLogin";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const page = async (props: Props) => {
  return (
    <div className="grid place-content-center w-full">
      <div className="min-w-[400px] ml-7 mt-5 bg-[#F8FAE5] border border-gray-200 rounded-lg shadow mx-auto">
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
            <p className="text-[16px] my-3">Welcome Back !</p>
            <p className="text-[12px] text-[#4c4c4c]">
              Sign in to continue to your Digital Library
            </p>
          </div>
          <Form callbackUrl={props.searchParams?.callbackUrl} />
          <GoogleLogin />
          <div
            className="flex flex-row text-[#4c4c4c] text-[12px]"
            style={{ marginTop: "30px", marginBottom: "15px" }}
          >
            <div className="basis-3/5">
              New User?
              <Link
                href="/register"
                className="inline underline underline-offset-2"
              >
                Register Here
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
