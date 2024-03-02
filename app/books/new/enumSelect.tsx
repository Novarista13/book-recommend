import React from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  name: Path<T>;
  options: readonly number[] | string[];
  register: UseFormRegister<T>;
}

const EnumSelect = <T extends FieldValues>({
  name,
  register,
  options,
}: InputProps<T>) => {
  return (
    <select
      className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-full focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2 mb-0.5 text-center"
      style={{ textTransform: "capitalize" }}
      defaultValue={""}
      {...register(name)}
    >
      <option disabled value={""}>
        {name}
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default EnumSelect;
