"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";

import MultiSelect from "./multiSelect";
import FileUpload from "./fileUpload";
import SingleSelect from "./singleSelect";
import EnumSelect from "./enumSelect";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE, { SimpleMDEReactProps } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import SingleCheck from "./singleCheck";
import { Label } from "flowbite-react";
import AddFormError from "./addFormError";

const FormSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  rating: z.string().min(1),
  authorId: z.number().min(1),
  lang: z.string().min(1),
  status: z.string().min(1),
  publishedYear: z.number().positive().optional(),
  publishedPlatform: z.string().max(255).optional(),
  parts: z.number().positive().optional(),
  cover: z.string().optional(),
  ebook: z.string().optional(),
});

interface Option {
  readonly label: string;
  readonly value: number;
}

const Form = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [cover, setCover] = useState<File | null>();
  const [pdf, setPdf] = useState<File | null>();
  const [availability, setAvailability] = useState<string[]>([]);
  const [category, setCategory] = React.useState<readonly Option[]>([]);
  const [transLang, setTransLang] = React.useState<readonly Option[]>([]);

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

  async function fileUploadHandler(file: File) {
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await axios.post("/api/photo-upload", data);
      if (res.statusText !== "OK") throw new Error("upload uncessfull");
    } catch (e: any) {
      console.error(e);
    }
  }

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    // try {
    if (cover) {
      fileUploadHandler(cover);
    }
    if (pdf) {
      fileUploadHandler(pdf);
    }
    if (category.length == 0) return;

    let data = {
      ...values,
      availability: JSON.stringify(availability),
      cover: cover?.name,
      ebook: pdf?.name,
    };

    const categoryArray: number[] = [];
    category.forEach((c) => {
      categoryArray.push(c.value);
    });

    // try {
    //   const res = await axios.post("/api/books", data);
    //   if (res.data.id) {
    //     await axios.post("/api/category-list", {
    //       bookId: res.data.id,
    //       categoryIdList: categoryArray,
    //     });
    //     router.push("/books");
    //   }
    // } catch (error) {
    //   setError("Unexpectd error ocuured!");
    // }
  };

  return (
    <form
      className=" accent-[#76453B] text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row gap-x-6">
        <div className="flex flex-col basis-1/3 gap-y-2">
          <div>
            <Label
              htmlFor="title"
              className="text-white mb-1 block"
              value="Book Title"
            />
            <input
              type="text"
              id="title"
              className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
              placeholder="Book name"
              {...register("title")}
            />
            {errors?.title?.message && (
              <AddFormError message="book title required" />
            )}
          </div>
          <div>
            <Label
              htmlFor="description"
              className="text-white mb-1 block"
              value="Book Description"
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMDE
                  placeholder="description"
                  options={mdeOptions}
                  className="max-h-[301px] max-w-[312px] p-0 placeholder-[#76453B]"
                  {...field}
                />
              )}
            />
            {errors?.description?.message && (
              <AddFormError message="description required" />
            )}
          </div>
        </div>
        <div className="flex flex-col basis-1/3 gap-y-2">
          <div>
            <Label
              htmlFor="categories"
              className="text-white mb-1 block"
              value="Book Categories"
            />
            <MultiSelect value={category} setValue={setCategory} />
          </div>
          <div>
            <Label
              htmlFor="author"
              className="text-white mb-1 block"
              value="Book Author"
            />
            <Controller
              name="authorId"
              control={control}
              render={({ field: { onChange } }) => (
                <SingleSelect
                  onChange={(val: { value: number }) => onChange(val.value)}
                />
              )}
              rules={{ required: true }}
            />
            {errors?.authorId?.message && (
              <AddFormError message="author required" />
            )}
          </div>
          <div className="flex flex-row gap-x-6">
            <div>
              <Label
                htmlFor="publishedYear"
                className="text-white mb-1 block"
                value="Published Year"
              />
              <input
                type="number"
                id="topbar-search"
                className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                placeholder="2..."
                {...register("publishedYear", {
                  setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
                })}
              />
              {errors?.publishedYear?.message && (
                <AddFormError message={errors?.publishedYear?.message} />
              )}
            </div>
            <div>
              <Label
                htmlFor="publishedPlatform"
                className="text-white mb-1 block"
                value="Published Platfrom"
              />
              <input
                type="text"
                id="topbar-search"
                className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                placeholder="Amazon"
                {...register("publishedPlatform")}
              />
              {errors?.publishedPlatform?.message && (
                <AddFormError message={errors?.publishedPlatform?.message} />
              )}
            </div>
          </div>
          <div className="flex flex-row gap-x-6">
            <div>
              <Label
                htmlFor="parts"
                className="text-white mb-1 block"
                value="Parts"
              />
              <input
                type="number"
                id="topbar-search"
                className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                placeholder="Parts"
                {...register("parts", {
                  setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
                })}
              />
              {errors?.parts?.message && (
                <AddFormError message={errors?.parts?.message} />
              )}
            </div>
            <div>
              <Label
                htmlFor="parts"
                className="text-white mb-1 block"
                value="Parts"
              />
              <input
                type="number"
                id="topbar-search"
                className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                placeholder="Parts"
                {...register("parts", {
                  setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
                })}
              />
              {errors?.parts?.message && (
                <AddFormError message={errors?.parts?.message} />
              )}
            </div>
          </div>
          <div className="flex flex-row gap-x-6">
            <FileUpload
              label="Upload Cover"
              changeHandler={(e) => setCover(e.target.files?.[0])}
            />
            {errors?.cover?.message && (
              <AddFormError message={errors?.cover?.message} />
            )}
            <FileUpload
              label="Upload Pdf"
              changeHandler={(e) => setPdf(e.target.files?.[0])}
            />
            {errors?.ebook?.message && (
              <AddFormError message={errors?.ebook?.message} />
            )}
          </div>
        </div>
        <div className="flex flex-col basis-1/3 gap-y-2">
          <div className="flex flex-row gap-x-6">
            <div className="basis-1/2">
              <Label
                htmlFor="lang"
                className="text-white mb-1 block"
                value="Lang"
              />
              <EnumSelect
                register={register}
                name="lang"
                options={[
                  "English",
                  "Burmese",
                  "Korean",
                  "Chinese",
                  "Japanese",
                ]}
              />
              {errors?.lang?.message && (
                <AddFormError message="language required" />
              )}
            </div>
            <div className="basis-1/2">
              <Label
                htmlFor="status"
                className="text-white mb-1 block"
                value="Status"
              />
              <EnumSelect
                register={register}
                name="status"
                options={["Ongoing", "Completed"]}
              />
              {errors?.status?.message && (
                <AddFormError message="status required" />
              )}
            </div>
          </div>
          <div>
            <Label
              htmlFor="categories"
              className="text-white mb-1 block"
              value="Trans Languages *max-4"
            />
            <MultiSelect value={transLang} setValue={setTransLang} />
          </div>
          {transLang.length > 0 && (
            <div className="flex flex-row gap-x-6">
              {transLang?.map(
                (t, id) =>
                  id < 2 && (
                    <div key={t.value}>
                      <Label
                        htmlFor="link"
                        className="text-white mb-1 block"
                        value={t?.label?.slice(0, 3) + " trans link"}
                      />
                      <input
                        name="link"
                        type="string"
                        id="topbar-search"
                        className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                        placeholder="2..."
                      />
                    </div>
                  )
              )}
            </div>
          )}
          <div className="flex flex-row gap-x-6">
            <div className="my-3 block basis-1/2">
              <div className="text-gray-50 font-medium text-right">
                Available Format
              </div>
              {/* <div className="flex flex-row gap-x-5 mx-auto"> */}
              {[
                { label: "Hard Copy", value: "HardCopy" },
                { label: "E - Book", value: "EBook" },
                { label: "Audio book", value: "Audiobook" },
              ].map((f) => (
                <SingleCheck
                  key={f.value}
                  data={f}
                  onChange={(e: { target: { checked: any } }) =>
                    setAvailability(
                      e.target.checked
                        ? [...availability, f.value]
                        : availability.filter((i) => i !== f.value)
                    )
                  }
                />
              ))}
              {/* </div> */}
            </div>
            {transLang.length > 2 && (
              <div className="flex flex-col basis-1/2">
                {transLang?.map(
                  (t, id) =>
                    id >= 2 && (
                      <div key={t.value}>
                        <Label
                          htmlFor="link"
                          className="text-white mb-1 block"
                          value={t?.label?.slice(0, 3) + " trans link"}
                        />
                        <input
                          name="link"
                          type="string"
                          id="topbar-search"
                          className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                          placeholder="2..."
                        />
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-[#76453B] mt-3 bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
