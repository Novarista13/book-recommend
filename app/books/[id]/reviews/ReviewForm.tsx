"use client";

import { useMemo, useState } from "react";

import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label, Modal } from "flowbite-react";
import { Controller, useForm } from "react-hook-form";

import SimpleMDEReact, { SimpleMDEReactProps } from "react-simplemde-editor";

import { z } from "zod";

const FormSchema = z.object({
  rating: z.number().positive(),
  content: z.string().min(1),
});
const ReviewForm = ({ book }: { book: { id: number } }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [error, setError] = useState("");

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(values);

      const res = await axios.post("/api/reviews", {
        ...values,
        bookId: book?.id,
      });
      console.log(res);
    } catch (error) {
      setError("Unexpectd error ocuured!");
    }
  };

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
        "preview",
        "redo",
        "undo",
      ],
    } as SimpleMDEReactProps;
  }, []);

  return (
    <div className=" mx-5">
      <p className="text-[#F8FAE5] text-[20px] font-medium">Write a Review</p>
      <form
        className=" accent-[#76453B] flex flex-row gap-x-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="min-h-[230px]">
          <div className="mb-1 block ">
            <Label
              htmlFor="description"
              className="text-white"
              value="Description"
            />
          </div>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <SimpleMDEReact
                placeholder="description"
                options={mdeOptions}
                className="review-form p-0 w-[490px] accent-[#76453B]"
                {...field}
              />
            )}
          />
        </div>
        <div>
          <div className="mb-1 block ">
            <Label htmlFor="rating" className="text-white" value="Rating" />
          </div>
          <input
            type="number"
            min={1}
            max={5}
            id="topbar-search"
            className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5 mb-20"
            placeholder="rating (1 to 5)"
            {...register("rating", {
              setValueAs: (v) => parseInt(v, 10),
            })}
          />
          <button
            type="submit"
            className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
