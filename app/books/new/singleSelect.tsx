import { ChangeEventHandler } from "react";
import CreatableSelect from "react-select/creatable";
import { useRouter } from "next/navigation";

const options = [
  { value: 1, label: "Chocolate" },
  { value: 2, label: "Strawberry" },
  { value: 3, label: "Vanilla" },
];

export default function SingleSelect({ ...props }) {
  const router = useRouter();
  return (
    <CreatableSelect
      isClearable
      onCreateOption={() => router.push("/books")}
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
  );
}
