import { Dropdown } from "flowbite-react";
import React from "react";

const RemoveDropDown = ({ remove }: { remove: () => void }) => {
  return (
    <Dropdown
      label="add to list"
      className=" bg-[#F8FAE5] rounded-lg border-2 border-[#76453B]"
      renderTrigger={() => (
        <button className="absolute top-2 right-2">
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            id="edit-alt-6"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="secondary"
                d="M20,4h0a3,3,0,0,0-4.24,0L8.3,11.47l4.24,4.24L20,8.24A3,3,0,0,0,20,4Z"
                style={{ fill: "#76453B", strokeWidth: 2 }}
              ></path>
              <path
                id="primary"
                d="M5.47,14.3l4.24,4.24L7.24,21H3V16.76ZM20,4h0a3,3,0,0,0-4.24,0L8.3,11.47l4.24,4.24L20,8.24A3,3,0,0,0,20,4Z"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              ></path>
            </g>
          </svg>
        </button>
      )}
    >
      <Dropdown.Item
        className="hover:bg-[#76453B] hover:text-[#F8FAE5] focus:bg-[#76453B] focus:text-[#F8FAE5]"
        as="button"
        onClick={remove}
      >
        <span>Remove</span>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default RemoveDropDown;
