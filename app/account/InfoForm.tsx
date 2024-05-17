"use client";
import React, { useMemo, useState } from "react";

import SimpleMDE, { SimpleMDEReactProps } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import UserInfo from "./UserInfo";

interface infoForm {
  full_name: string;
  email: string;
  register_num: number;
  phone_num: number;
  bio: string;
}

const InfoForm = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<infoForm>();
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState<{
    name: string | null | undefined;
    email: string | null | undefined;
  }>({
    name: null,
    email: null,
  });
  const { data: session } = useSession();

  useMemo(() => {
    if (session)
      setUserInfo({
        name: session?.user.username || session?.user.name,
        email: session?.user.email,
      });
  }, [session]);

  const mdeOptions = useMemo(() => {
    return {
      toolbar: [
        "bold",
        "italic",
        "quote",
        "unordered-list",
        "ordered-list",
        "guide",
        "heading-1",
        "heading-2",
        "heading-3",
        "redo",
        "undo",
      ],
    } as SimpleMDEReactProps;
  }, []);

  return (
    <form
      className="space-y-3 flex flex-col m-4"
      // onSubmit={handleSubmit(async (data) => {
      //   try {
      //     await axios.post("/api/books", data);
      //     router.push("/books");
      //   } catch (error) {
      //     setError("Unexpectd error ocuured!");
      //   }
      // })}
    >
      <div className="flex flex-row items-center gap-x-6">
        <UserInfo />
        <div className="flex flex-col basis-1/2 gap-y-5">
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
            >
              Full name
            </label>
            <input
              disabled={true}
              type="text"
              id="topbar-search"
              className="accent-[#76453B] disabled:placeholder-[#647284] placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={userInfo?.name ?? "sample name"}
              {...register("full_name")}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>{" "}
            <input
              disabled={true}
              type="text"
              id="topbar-search"
              className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={userInfo?.email ?? "sample@gmail.com"}
              {...register("email")}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="email"
          className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
        >
          Bio
        </label>
        <Controller
          name="bio"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              placeholder="I’m a Student "
              options={mdeOptions}
              className=" p-0 max-h-[301px] info-form pointer-events-none text-[12px] accent-[#76453B] placeholder-[#B19470]"
              {...field}
            />
          )}
        />
      </div>

      <div>
        <button
          type="button"
          className="text-[#F8FAE5] max-w-[150px] bg-[#76453B] hover:bg-[#F8FAE5] hover:text-[#76453B] inline hover:ring-2 hover:ring-[#B19470] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm p-2 me-2 mb-2 focus:outline-none"
        >
          Update Profile
        </button>
        <button
          type="button"
          className="text-[#76453B] max-w-[150px] bg-transparent hover:bg-[#F8FAE5] inline hover:underline decoration-2 hover:underline-[#76453B]  focus:underline-[#76453B] font-medium rounded-lg text-sm p-2 me-2 mb-2 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default InfoForm;
