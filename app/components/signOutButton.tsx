"use client";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <div>
      <button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/login`,
          })
        }
        className="text-red-600"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
