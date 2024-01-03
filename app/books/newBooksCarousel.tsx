"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

const NewBooksCarousel = () => {
  return (
    <div className="h-[11.5rem]">
      <Carousel slide={true}>
        <Image
          width={50}
          height={30}
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <Image
          width={30}
          height={30}
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <Image
          width={30}
          height={30}
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <Image
          width={30}
          height={30}
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <Image
          width={30}
          height={30}
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default NewBooksCarousel;
