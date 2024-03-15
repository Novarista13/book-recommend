import { SetStateAction, useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import React from "react";
import CreateAuthorModal from "./createAuthorModal";

export default function SingleSelect({ ...props }) {
  const [options, setOptions] = useState<{ value: number; label: string }[]>([
    { value: 1, label: "Chocolate" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/authors");

      const tempArray: SetStateAction<{ value: number; label: string }[]> = [];
      res?.data?.map((item: { id: number; name: string }) =>
        tempArray.push({ value: item.id, label: item.name })
      );
      tempArray.length > 0 && setOptions(tempArray);
    })();
  }, []);
  

  return (
    <>
      <CreateAuthorModal
        setIsLoading={setIsLoading}
        options={options}
        setOptions={setOptions}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onCreateOption={() => setOpenModal(true)}
        name="color"
        {...props}
        className="text-[#76453B] text-sm"
        placeholder="choose author"
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
            primary25: "#B19470",
            primary: "#76453B",
          },
        })}
        styles={{
          input: (styles) => ({
            ...styles,
            color: "#76453B",
          }),
          singleValue: (styles) => ({
            ...styles,
            color: "#76453B",
          }),
          option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            ":hover": { color: "white" },
            color: isFocused ? "white" : isSelected ? "white" : "#76453B",
          }),
          clearIndicator: (styles, { isFocused }) => ({
            ...styles,
            color: isFocused ? "#76453B" : "#76453B",
          }),
          dropdownIndicator: (styles, { isFocused }) => ({
            ...styles,
            color: isFocused ? "#76453B" : "#76453B",
          }),
          placeholder: (styles) => ({
            ...styles,
            color: "#76453B",
          }),
        }}
      />
    </>
  );
}
