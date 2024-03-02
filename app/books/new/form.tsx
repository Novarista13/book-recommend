"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import MultiSelect from "./multiSelect";
import FileUpload from "./fileUpload";
import SingleSelect from "./singleSelect";
import EnumSelect from "./enumSelect";

import { boolean, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import SingleCheck from "./singleCheck";

const FormSchema = z.object({
  // title: z.string().min(1).max(255),
  // description: z.string().min(1),
  // rating: z.string(),
  // authorId: z.number().min(1),
  // lang: z.string(),
  availability: z.array(z.string()).optional(),
  // status: z.string(),
  // cover: z.string().optional(),
  // ebook: z.string().optional(),
  // assignedToUserId: z.string().optional(),
});

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
    defaultValues: { availability: ["", "", ""] },
  });
  const [cover, setCover] = useState<File | null>();
  const [pdf, setPdf] = useState<File | null>();
  const [error, setError] = useState("");

  console.log(errors);

  async function fileUploadHandler(file: File) {
    if (!file) return;
    let fileName = file?.name;
    console.log(fileName);

    try {
      const data = new FormData();
      data.set("file", file);
      console.log(data);
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
    console.log({
      ...values,
      cover: cover?.name,
      ebook: pdf?.name,
      assignedToUserId: session?.user.id,
    });
    //   await axios.post("/api/books", data);
    //   router.push("/books");
    // } catch (error) {
    //   setError("Unexpectd error ocuured!");
    // }
  };

  return (
    <form className=" accent-[#76453B]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-x-6">
        <div className="flex flex-col min-h-[360px] basis-2/3 gap-y-3">
          <input
            type="text"
            id="topbar-search"
            className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
            placeholder="Book name"
            {...register("title")}
          />
          <MultiSelect />
          <Controller
            name="authorId"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SingleSelect
                onChange={(val: { value: any }) => onChange(val.value)}
              />
            )}
            rules={{ required: true }}
          />
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
        <div className="flex flex-col basis-1/3 gap-y-3">
          <EnumSelect
            register={register}
            name="rating"
            options={["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"]}
          />
          <EnumSelect
            register={register}
            name="lang"
            options={["English", "Burmese", "Korean", "Chinese", "Japanese"]}
          />
          <EnumSelect
            register={register}
            name="status"
            options={["Ongoing", "Completed"]}
          />
          <div className="my-7 block">
            <div className="text-gray-50 text-center">Available Format</div>
            {[
              { label: "Hard Copy", value: "HardCopy" },
              { label: "E - Book", value: "EBook" },
              { label: "Audio book", value: "Audiobook" },
            ].map((f, id) => (
              <div className="text-end mt-1 ms-0 pr-5" key={f.value}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, ref, value } }) => (
                    <SingleCheck
                      data={f}
                      onChange={(val: { value: any }) => onChange(val.value)}
                    />
                  )}
                  name={`availability.${id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-5 gap-x-3">
        <FileUpload
          label="Upload Cover"
          changeHandler={(e) => setCover(e.target.files?.[0])}
        />
        <FileUpload
          label="Upload Pdf"
          changeHandler={(e) => setPdf(e.target.files?.[0])}
        />
      </div>

      <button
        type="submit"
        className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
