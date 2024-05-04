"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "../../public/profile.jpg";
import Link from "next/link";
import InfoForm from "./InfoForm";
import axios from "axios";
import { FileInput, Label } from "flowbite-react";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { data: session } = useSession();
  const [profileFile, setProfileFile] = useState<File | null>();

  async function fileUploadHandler(file: File) {
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await axios.post("/api/file-upload", data);
      if (res.statusText !== "OK") throw new Error("upload uncessfull");

      const response = await axios.put(`/api/user/${session?.user.id}`, {
        profile: file.name,
      });
      console.log(response);
    } catch (e: any) {
      console.error(e);
    }
  }

  return (
    <div className="text-xs text-center basis-1/3">
      <p>Your Profile Picture</p>
      <Image
        src={
          session?.user.image
            ? session?.user.image?.includes("https")
              ? session?.user.image
              : `/${session?.user.image}`
            : profile
        }
        alt="profile picture"
        className="rounded-full mx-auto my-2.5"
        width={80}
        height={80}
      />
      <Label
        htmlFor="dropzone-file"
        className="flex justify-center cursor-pointer"
      >
        <p className="text-[9px] underline underline-offset-[3px]">
          Select New photo
        </p>
        <FileInput
          id="dropzone-file"
          className="hidden"
          onChange={(e) => setProfileFile(e.target.files?.[0])}
        />
      </Label>
      <Link
        href="#"
        className="text-[9px] underline underline-offset-[3px]"
        onClick={() => profileFile && fileUploadHandler(profileFile)}
      >
        Upload
      </Link>
    </div>
  );
};

export default UserInfo;
