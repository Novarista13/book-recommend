import React from "react";
import tick from "../../../public/success.svg";
import Image from "next/image";
import Link from "next/link";

const Success = () => {
  return (
    <div className="text-center">
      <p className="text-white text-[35px] font-semibold md:mb-12">
        Thank you For your Review
      </p>
      <Image src={tick} alt="success" className="mx-auto" />
      <p className="text-white text-[18px] font-semibold mt-10">
        you can see your review in
        <Link href="#" className="text-[#e3c39c]">
          {" "}
          myshelf session
        </Link>
      </p>
    </div>
  );
};

export default Success;
