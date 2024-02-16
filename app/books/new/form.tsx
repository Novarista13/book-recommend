"use client";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface BookForm {
  title: string;
  description: string;
}

const Form = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<BookForm>();
  const [error, setError] = useState("");

  {
    /* {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )} */
  }

  return (
    <form
      className="space-y-3 accent-[#76453B]"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/books", data);
          router.push("/books");
        } catch (error) {
          setError("Unexpectd error ocuured!");
        }
      })}
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <input
            type="text"
            id="topbar-search"
            className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Book name"
            {...register("title")}
          />
        </div>
        <div className="col-start-3">
          <select className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-full focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2 text-center">
            <option selected disabled value={""}>
              Category
            </option>
            <option>Dashboard</option>
            <option>Settings</option>
            <option>Earnings</option>
            <option>Sign out</option>
          </select>
        </div>
        <div className="col-span-2 row-start-2">
          <input
            type="text"
            id="topbar-search"
            className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Author name"
            {...register("title")}
          />
        </div>
        <div className="col-start-3 row-start-2">
          <select className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-full focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2 text-center">
            <option selected disabled value={""}>
              Lang
            </option>
            <option>Dashboard</option>
            <option>Settings</option>
            <option>Earnings</option>
            <option>Sign out</option>
          </select>
        </div>
        <div className="col-span-2  row-start-3">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE
                placeholder="description"
                className="max-h-24 p-0 accent-[#76453B] placeholder-[#76453B]"
                {...field}
              />
            )}
          />
        </div>
        <div className=" col-start-3 row-start-3 h-48">
          <div className="my-7 block">
            <div className="text-gray-50 text-center">Available Format</div>
            {["Hard Copy", "E - Book", "Audio book"].map((f) => (
              <div className="text-end mt-1 ms-0 pr-5" key={f}>
                <label
                  htmlFor="checked-checkbox"
                  className="me-2 text-sm font-medium text-gray-50 dark:text-gray-300"
                >
                  {f}
                </label>
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value={f}
                  className="w-4 h-4 text-[#76453B] bg-gray-100 border-gray-300 rounded focus:ring-[#B19470] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
