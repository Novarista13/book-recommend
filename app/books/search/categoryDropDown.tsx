import React from "react";
import { Dropdown } from "flowbite-react";

const CategoryDropdown = () => {
  return (
    <div className="max-w-[120px]">
      <Dropdown
        label="view"
        className="bg-[#F8FAE5]"
        renderTrigger={() => (
          <div className="group">
            <button className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
              Browse
              <svg
                width="13"
                height="7"
                viewBox="0 0 13 7"
                className="pl-1 inline group-hover:text-white w-4 h-4 text-[#76453B] dark:text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.17585 6.38027C6.79349 6.73088 6.20651 6.73088 5.82415 6.38027L1.03312 1.98704C0.360988 1.37072 0.797034 0.25 1.70896 0.25L11.291 0.25C12.203 0.25 12.639 1.37072 11.9669 1.98704L7.17585 6.38027Z" />
              </svg>
            </button>
          </div>
        )}
      >
        {["engineering", "medical", "art & science", "architecture"].map(
          (v) => (
            <Dropdown.Item
              className="bg-[#F8FAE5] focus:bg-[#76453B] focus:text-[#F8FAE5]"
              key={v}
              onClick={() => console.log(v)}
            >
              <span className="capitalize">{v}</span>
            </Dropdown.Item>
          )
        )}
      </Dropdown>
    </div>
  );
};

export default CategoryDropdown;
