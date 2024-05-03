"use client";
import React from "react";
import { Avatar, Dropdown } from "flowbite-react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import SignOutButton from "./signOutButton";

const UserDropDown = () => {
  const { data: session } = useSession();

  return (
    <Dropdown
      arrowIcon={false}
      className="ring-2 ring-[#76453B] bg-[#F8FAE5] text-[#76453B] rounded-lg border-2 border-[#76453B] "
      inline
      label={
        <Avatar
          alt="User"
          className="hover:ring-4 hover:rounded-full hover:ring-[#76453B] "
          img={`${session?.user.image ?? "/pf_sample.jpg"}`}
          rounded
        />
      }
    >
      <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
        <span className="block text-sm">
          {session?.user.username || session?.user.name}
        </span>
        <span className="block truncate text-sm font-medium">
          {session?.user.email}
        </span>
      </div>
      <Dropdown.Divider className="bg-[#76453B]" />
      {[
        { title: "Home", href: "/books" },
        { title: "Settings", href: "/account" },
      ].map((i) => (
        <Dropdown.Item
          key={i.title}
          className=" focus:bg-[#76453B] focus:text-[#F8FAE5] "
        >
          <Link href={i.href}>{i.title}</Link>
        </Dropdown.Item>
      ))}
      <Dropdown.Divider className="bg-[#76453B]" />
      <Dropdown.Item className=" focus:bg-[#76453B] focus:text-[#F8FAE5] ">
        <SignOutButton />
      </Dropdown.Item>
    </Dropdown>
  );
};

export default UserDropDown;
