import React, { KeyboardEventHandler, useState } from "react";

import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: 1, label: "Chocolate" },
  { value: 2, label: "Strawberry" },
  { value: 3, label: "Vanilla" },
];
interface Option {
  readonly label: string;
  readonly value: number;
}

// const changeHandler = (
//   options: readonly { value: number; label: string }[]
// ) => {
//   let categoryIds: number[] = [];
//   options.forEach((op) => {
//     categoryIds.push(op.value);
//   });
//   console.log(categoryIds);
// };

const components = {
  DropdownIndicator: null,
};

const createOption = (label: string) => ({
  label,
  value: label,
});

export default function MultiSelect() {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState<readonly Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const createOption = (label: string) => ({
    label,
    value: options.length + 1,
  });

  const handleCreate = () => {
    if (!inputValue) return;
    setIsLoading(true);
    setTimeout(() => {
      setValue([...value, createOption(inputValue)]);
      setInputValue("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      isDisabled={isLoading}
      isLoading={isLoading}
      inputValue={inputValue}
      onChange={(newValue) => setValue(newValue)}
      onInputChange={(newValue) => setInputValue(newValue)}
      onCreateOption={handleCreate}
      placeholder="choose category"
      value={value}
      className="text-[#76453B] text-sm"
      isMulti
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary25: "#76453B",
          primary: "#76453B",
        },
      })}
      styles={{
        input: (styles) => ({
          ...styles,
          color: "#76453B",
        }),
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          ":hover": { color: "white" },
          color: isFocused ? "white" : "#76453B",
        }),
        multiValue: (styles) => ({
          ...styles,
          backgroundColor: "rgb(243 244 246)",
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          color: "#76453B",
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          ":hover": { backgroundColor: "#76453B", color: "white" },
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
