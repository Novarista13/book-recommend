import Image from "next/image";
import React from "react";
import profile from "../../public/profile.jpg";
import CurrentReading from "./CurrentReading";
import Link from "next/link";
import InfoForm from "./InfoForm";

const UserInfo = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-x-6">
        <div className="text-xs text-center basis-3/12">
          <p>Your Profile Picture</p>
          <Image
            src={profile}
            alt="profile picture"
            className="rounded-full mx-auto my-2.5"
            width={80}
            height={80}
          />
          <Link
            href="#"
            className="text-[9px] underline underline-offset-[3px]"
          >
            Upload New photo
          </Link>
        </div>
        <CurrentReading color="#B19471" count={120} title="Reading" />
        <CurrentReading color="#76453B" count={10} title="Contribution" />
      </div>
      <InfoForm />
    </>
  );
};

export default UserInfo;
