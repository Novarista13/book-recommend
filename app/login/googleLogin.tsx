"use client";
import React, { useState } from "react";
import google from "../../public/google.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import spinner from "../../public/spinner.svg";

const GoogleLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={async () => {
        try {
          setIsLoading(true);
          await signIn("google", {
            callbackUrl: "http://localhost:3000/books",
          });
        } catch (error) {
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      }}
      className=" w-[97%] bg-[#F8FAE5] text-[#76453B] ring-2 ring-[#B19470] focus:ring-2  font-medium rounded-lg text-sm p-1 me-2 flex flex-row items-center"
    >
      {isLoading ? (
        <Image
          src={spinner}
          className="h-10 basis-1/3 basis float-right"
          alt="book logo"
        />
      ) : (
        <Image
          src={google}
          className="h-10 basis-1/3 basis float-right"
          alt="book logo"
        />
      )}
      <span className="text-base">Sign in with google </span>
    </button>
  );
};

export default GoogleLogin;
