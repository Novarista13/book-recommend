import React, { ChangeEventHandler } from "react";

// interface Props {
//   data: { label: string; value: string };

//   onChange: ChangeEventHandler<HTMLInputElement>;
// }

const SingleCheck = ({ ...props }) => {
  return (
    <>
      <label
        htmlFor="checkbox"
        className="me-2 text-sm font-medium text-gray-50 dark:text-gray-300"
      >
        {props.data.label}
      </label>
      <input
        id="checkbox"
        type="checkbox"
        {...props}
        className="w-4 h-4 text-[#76453B] bg-gray-100 border-gray-300 rounded focus:ring-[#B19470] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </>
  );
};

export default SingleCheck;
