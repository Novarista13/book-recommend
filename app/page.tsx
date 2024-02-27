"use client";
import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File>();

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) return;
    let cover = file?.name;
    console.log(cover);

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

  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/books">Books</Link>
      <form
        className="space-y-3 accent-[#76453B]"
        onSubmit={(e) => submitHandler(e)}
      >
        <label
          className="block mb-2 text-sm font-medium text-white"
          htmlFor="image"
        >
          Cover Photo
        </label>
        <input
          className="block w-full mb-5 text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="image"
          type="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
