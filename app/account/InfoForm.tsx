"use client";
import React, { useState } from "react";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";

import { useRouter } from "next/navigation";
import axios from "axios";

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

  return (
    <form
      className="space-y-3 flex flex-col m-4"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/books", data);
          router.push("/books");
        } catch (error) {
          setError("Unexpectd error ocuured!");
        }
      })}
    >
      <div className="flex flex-row gap-x-5">
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
            placeholder="Novarista May"
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
            placeholder="serenenova1345@gmail.com"
            {...register("email")}
          />
        </div>
      </div>
      <div className="flex flex-row gap-x-5">
        <div className="w-full">
          <label
            htmlFor="email"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Register number
          </label>
          <input
            disabled={true}
            type="text"
            id="topbar-search"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="6022020"
            {...register("register_num")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Phone number
          </label>
          <input
            disabled={true}
            type="text"
            id="topbar-search"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="09777187742"
            {...register("phone_num")}
          />
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
              className=" p-0 max-h-[160px] pointer-events-none text-[12px] accent-[#76453B] placeholder-[#B19470]"
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
