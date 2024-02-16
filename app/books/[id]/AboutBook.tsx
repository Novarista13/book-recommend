import React from "react";
import { Dropdown } from "flowbite-react";

const AboutBook = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[380px] flex flex-col gap-y-5">
        <div>
          <p className="text-3xl text-white mb-1">Don’t Make Me Think</p>
          <p className="text-gray-100 text-sm mb-2">By Steve Krug, 2000</p>
          <p className="text-gray-300 text-xs">Second Edition</p>
        </div>
        <div className="flex flex-row text-xs gap-x-3.5 text-white">
          <div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.37943 4.05683L14 5.05044L10.85 8.55131L11.3262 13.2222L7 11.3291L2.67376 13.2222L3.15 8.55131L0 5.05044L4.62057 4.05683L7 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.37943 4.05683L14 5.05044L10.85 8.55131L11.3262 13.2222L7 11.3291L2.67376 13.2222L3.15 8.55131L0 5.05044L4.62057 4.05683L7 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.37943 4.05683L14 5.05044L10.85 8.55131L11.3262 13.2222L7 11.3291L2.67376 13.2222L3.15 8.55131L0 5.05044L4.62057 4.05683L7 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.37943 4.05683L14 5.05044L10.85 8.55131L11.3262 13.2222L7 11.3291L2.67376 13.2222L3.15 8.55131L0 5.05044L4.62057 4.05683L7 0Z"
                fill="#FFCB45"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.37943 4.05683L14 5.05044L10.85 8.55131L11.3262 13.2222L7 11.3291L2.67376 13.2222L3.15 8.55131L0 5.05044L4.62057 4.05683L7 0Z"
                fill="#FFCB45"
              />
            </svg>
          </div>
          <p>5.0 Ratings</p>
          <p>25 Currently reading</p>
          <p>119 Have read</p>
        </div>
        <div className="text-white flex flex-row gap-x-10 items-center">
          <div className="flex flex-col gap-y-1">
            <p className="text-xs font-semibold">Availability</p>
            {["Hard Copy", "E - Book", "Audio book"].map((f) => (
              <p key={f} className="text-sm">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  className="inline mr-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C3.35697 0 0 3.35697 0 7.5C0 11.643 3.35697 15 7.5 15C11.643 15 15 11.643 15 7.5C15 3.35697 11.643 0 7.5 0ZM6.34255 10.1575C6.25601 10.244 6.13341 10.3161 6.02524 10.3161C5.91707 10.3161 5.79447 10.2404 5.70433 10.1538L3.6851 8.13462L4.32692 7.49279L6.02885 9.19471L10.5288 4.66226L11.1599 5.3149L6.34255 10.1575Z"
                    fill="#42BB4E"
                  />
                </svg>
                {f}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-xs font-semibold">Status</p>{" "}
            <p className="bg-[#42BB4E] text-white text-xs p-1 px-2 rounded-md">
              completed
            </p>
            <div className="flex flex-row items-center">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.69008 19.433L9.69288 19.4342C9.89 19.52 10 19.5 10 19.5C10 19.5 10.11 19.52 10.3079 19.4339L10.3099 19.433L10.3157 19.4304L10.3338 19.422C10.3488 19.415 10.3697 19.4052 10.3959 19.3926C10.4484 19.3673 10.5225 19.3306 10.6153 19.2822C10.8008 19.1855 11.0612 19.0419 11.3717 18.8495C11.9912 18.4655 12.8174 17.8826 13.6455 17.0844C15.3022 15.4876 17 12.9925 17 9.5C17 5.63401 13.866 2.5 10 2.5C6.13401 2.5 3 5.63401 3 9.5C3 12.9925 4.69783 15.4876 6.35452 17.0844C7.18264 17.8826 8.00877 18.4655 8.62834 18.8495C8.93879 19.0419 9.19922 19.1855 9.38467 19.2822C9.47745 19.3306 9.55163 19.3673 9.60409 19.3926C9.63033 19.4052 9.65116 19.415 9.66619 19.422L9.68435 19.4304L9.69008 19.433ZM10 11.75C11.2426 11.75 12.25 10.7426 12.25 9.5C12.25 8.25736 11.2426 7.25 10 7.25C8.75736 7.25 7.75 8.25736 7.75 9.5C7.75 10.7426 8.75736 11.75 10 11.75Z"
                  fill="#F76B56"
                />
              </svg>
              <p className="text-sm">CS A-15</p>
            </div>
          </div>
          <div>
            <Dropdown
              label=""
              renderTrigger={() => (
                <div className="group">
                  <button className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-md text-sm px-3 py-2  me-2 mb-2  focus:outline-none ">
                    Add to List
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
              {["single", "double", "scroll"].map((v) => (
                <Dropdown.Item key={v}>
                  <span className="px-3 capitalize">{v}</span>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        </div>
        <div className="flex flex-row gap-x-6">
          <button
            type="button"
            className="text-[#76453B] w-full bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg  px-5 py-2.5 me-2  focus:outline-none"
          >
            BORROW
          </button>
          <button
            type="button"
            className="bg-[#42BB4E] w-full text-white hover:bg-[#2f9b3a] focus:ring-2 focus:ring-white font-medium rounded-lg px-5 py-0 me-2 focus:outline-none flex flex-row gap-x-2 items-center"
          >
            <span className="border-r-2 pr-3">Read Now</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="p-1 pr-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_68_1200)">
                <path
                  d="M20.3125 15.1042H18.2292C17.6539 15.1042 17.1875 15.5706 17.1875 16.1459V23.4376C17.1875 24.0129 17.6539 24.4792 18.2292 24.4792H20.3125C20.8878 24.4792 21.3542 24.0129 21.3542 23.4376V16.1459C21.3542 15.5706 20.8878 15.1042 20.3125 15.1042Z"
                  fill="white"
                />
                <path
                  d="M23.4377 16.6667H22.396V22.9167H23.4377C23.7139 22.9167 23.9789 22.807 24.1742 22.6117C24.3696 22.4163 24.4793 22.1513 24.4793 21.8751V17.7084C24.4793 17.4321 24.3696 17.1672 24.1742 16.9718C23.9789 16.7765 23.7139 16.6667 23.4377 16.6667Z"
                  fill="white"
                />
                <path
                  d="M6.771 15.1042H4.68766C4.11237 15.1042 3.646 15.5706 3.646 16.1459V23.4376C3.646 24.0129 4.11237 24.4792 4.68766 24.4792H6.771C7.34629 24.4792 7.81266 24.0129 7.81266 23.4376V16.1459C7.81266 15.5706 7.34629 15.1042 6.771 15.1042Z"
                  fill="white"
                />
                <path
                  d="M0.520996 17.7083V21.8749C0.520996 22.1512 0.630743 22.4161 0.826093 22.6115C1.02144 22.8068 1.2864 22.9166 1.56266 22.9166H2.60433V16.6666H1.56266C1.2864 16.6666 1.02144 16.7763 0.826093 16.9717C0.630743 17.167 0.520996 17.432 0.520996 17.7083ZM19.4637 10.3385C19.6041 10.7916 19.848 11.2059 20.1761 11.5485C20.5043 11.8911 20.9077 12.1526 21.3543 12.3124C21.3543 9.96415 20.4215 7.71206 18.761 6.05158C17.1005 4.3911 14.8484 3.45825 12.5002 3.45825C10.1519 3.45825 7.8998 4.3911 6.23932 6.05158C4.57884 7.71206 3.646 9.96415 3.646 12.3124C4.09171 12.152 4.49404 11.8901 4.82124 11.5475C5.14844 11.205 5.39156 10.7911 5.53141 10.3385C7.65641 3.50513 17.3647 3.53117 19.4637 10.3385Z"
                  fill="white"
                />
                <path
                  d="M20.9689 4.03128C13.4741 -3.46351 0.520996 1.82815 0.520996 12.5V15.9063C1.14079 15.5521 1.59912 15.625 2.60433 15.625C2.60433 12.3229 2.16683 8.85419 5.50537 5.50524C11.672 -0.677053 22.396 3.64586 22.396 12.5V15.625C23.4064 15.625 23.8699 15.5573 24.4793 15.9063C24.4793 12.2709 25.0002 8.03648 20.9689 4.03128Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_1200">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBook;
