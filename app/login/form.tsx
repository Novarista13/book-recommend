"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Toast } from "flowbite-react";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import warning from "../../public/warning.svg";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});

type Props = {
  callbackUrl?: string;
};

const Form = ({ callbackUrl }: Props) => {
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
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.error) {
      console.log(res.error);
      setError("Something went wrong!");
      router.push(callbackUrl ?? "http://localhost:3000/login");
    } else {
      router.push("/");
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
            htmlFor="email"
            className="block mb-1 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            className="accent-[#76453B] disabled:placeholder-[#647284]  placeholder-[#B19470] text-[#76453B] bg-gray-50 border border-gray-300 text-[12px] rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full  h-[2.25rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="abcd@gmail.com"
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
            placeholder="1234567"
            {...register("password")}
          />
          {errors.password && (
            <div className="ml-2 text-xs text-red-600 font-normal">
              {errors.password?.message}
            </div>
          )}
        </div>
        <div
          className="flex flex-row text-[#4c4c4c] text-[12px]"
          style={{ marginTop: "28px", marginBottom: "15px" }}
        >
          <div className="flex items-start basis-1/2">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="accent-[#76453B] checked:bg-[#76453B] w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#76453B] "
              />
            </div>
            <label htmlFor="remember" className="ms-2 ">
              Remember me
            </label>
          </div>
          <div className="flex justify-end items-center basis-1/2">
            <Link href="#" className="underline underline-offset-2">
              Forgot password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="text-[#F8FAE5] bg-[#76453B] hover:bg-[#F8FAE5] hover:text-[#76453B] inline hover:ring-2 hover:ring-[#B19470] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm p-2 me-2 mb-2 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
