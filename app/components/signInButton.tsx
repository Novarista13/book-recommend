"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import UserDropDown from "./userDropDown";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return <UserDropDown />;
  }

  return (
    <Link
      href="/login"
      className=" bg-[#43766C] text-[#F8FAE5] inline hover:ring-2 hover:ring-[#F8FAE5] focus:ring-2 focus:ring-[#F8FAE5] font-medium rounded-lg text-normal p-2 focus:outline-none"
    >
      Sign In
    </Link>
  );
};

export default SigninButton;
