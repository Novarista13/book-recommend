import React, {
  KeyboardEventHandler,
  ChangeEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import axios from "axios";
import AddFormError from "../../new/Form/addFormError";

const animatedComponents = makeAnimated();

interface Option {
  readonly label: string;
  readonly value: number;
}

export default function MultiSelect({
  value,
  setValue,
}: {
  value: readonly Option[];
  setValue: React.Dispatch<React.SetStateAction<readonly Option[]>>;
}) {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<{ value: number; label: string }[]>([
    { value: 1, label: "Chocolate" },
    { value: 2, label: "Strawberry" },
    { value: 3, label: "Vanilla" },
  ]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/books");
      const tempArray: SetStateAction<{ value: number; label: string }[]> = [];
      res?.data?.map((item: { id: number; title: string }) =>
        tempArray.push({ value: item.id, label: item.title })
      );
      tempArray.length > 0 && setOptions(tempArray);
    })();
  }, []);

  const handleCreate = async () => {
    if (!inputValue) return;
    setIsLoading(true);
    // const res = await axios.post("/api/categories", { name: inputValue });
    // const { id, name } = res?.data;
    // setValue([...value, { value: id, label: name }]);
    // setOptions([...options, { value: id, label: name }]);
    // setInputValue("");
    // setIsLoading(false);
  };

  return (
    <>
      <CreatableSelect
        closeMenuOnSelect={false}
        components={animatedComponents}
        isDisabled={isLoading}
        isLoading={isLoading}
        inputValue={inputValue}
        onChange={(newValue) => setValue(newValue)}
        onInputChange={(newValue) => setInputValue(newValue)}
        onCreateOption={handleCreate}
        placeholder="choose book"
        value={value}
        isOptionDisabled={() => value.length >= 4}
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
      {value.length == 0 && <AddFormError message="at least 1 book required" />}
    </>
  );
}
