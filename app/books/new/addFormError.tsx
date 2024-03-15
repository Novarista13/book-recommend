import React from "react";

const AddFormError = ({ message }: { message: string }) => {
  return (
    <div className="ml-2 text-xs text-[#FECC00] font-normal">{message}</div>
  );
};

export default AddFormError;
