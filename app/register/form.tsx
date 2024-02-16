"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

interface loginForm {
  full_name: string;
  email: string;
  password: number;
}

const Form = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<loginForm>();
  const [error, setError] = useState("");

  return (
    <div>
      <form
        className="mx-auto space-y-3 flex flex-col m-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/books", data);
            router.push("/books");
          } catch (error) {
            setError("Unexpectd error ocuured!");
          }
        })}
      >
        <div>
          <label
            htmlFor="full_name"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="full_name"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="user name"
            {...register("full_name")}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="user@gmail.com"
            {...register("email")}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="number@$%*name"
            {...register("email")}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="number@$%*name"
            {...register("email")}
          />
        </div>

        <button
          type="button"
          className="text-[#F8FAE5] bg-[#76453B] hover:bg-[#F8FAE5] hover:text-[#76453B] inline hover:ring-2 hover:ring-[#B19470] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm p-2 me-2 mb-2 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
