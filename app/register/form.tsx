"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Toast } from "flowbite-react";
import axios from "axios";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import warning from "../../public/warning.svg";

const FormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(2, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [error, setError] = useState("");

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const res = await axios.post("/api/user", values);

      router.push("/login");
    } catch (error) {
      setError("Unexpectd error ocuured!");
    }
  };

  return (
    <div>
      {error && (
        <Toast className="">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-orange-500  ">
            <Image width={50} height={50} src={warning} alt="warning" />
          </div>
          <div className="ml-3 text-sm font-normal">{error}</div>
          <Toast.Toggle />
        </Toast>
      )}
      <form
        className="mx-auto space-y-3 flex flex-col m-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="username"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>

          <input
            type="text"
            id="username"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="user name"
            {...register("username")}
          />
          {errors.username && (
            <div className="ml-2 text-xs text-red-600 font-normal">
              {errors.username?.message}
            </div>
          )}
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
          {errors.email && (
            <div className="ml-2 text-xs text-red-600 font-normal">
              {errors.email?.message}
            </div>
          )}
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
            {...register("password")}
          />
          {errors.password && (
            <div className="ml-2 text-xs text-red-600 font-normal">
              {errors.password?.message}
            </div>
          )}
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
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <div className="ml-2 text-xs text-red-600 font-normal">
              {errors.confirmPassword?.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="text-[#F8FAE5] bg-[#76453B] hover:bg-[#F8FAE5] hover:text-[#76453B] inline hover:ring-2 hover:ring-[#B19470] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm p-2 me-2 mb-2 focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
