"use client";
import { ChangeEventHandler } from "react";

interface Props {
  label: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
}

const FileUpload = ({ label, changeHandler }: Props) => {
  return (
    <>
      <div className="block w-1/2">
        <span className="sr-only">Choose profile photo</span>
        <label className="block mb-1 text-sm text-white" htmlFor="file_input">
          {label}
        </label>
        <input
          className="block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none "
          id="file_input"
          type="file"
          onChange={changeHandler}
        />
      </div>
    </>
  );
};

export default FileUpload;
