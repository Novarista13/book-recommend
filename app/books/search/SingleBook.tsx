"use client";
import { useEffect, useState } from "react";
import check from "../../../public/check.svg";
import cross from "../../../public/cross.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const SingleBook = ({
  favorite,
  book,
}: {
  favorite: boolean;
  book: {
    id: number;
    title: string;
    status: string;
    availability: string;
    author: { name: string };
    publishedYear: number;
    cover: string;
  };
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [liked, setLiked] = useState(favorite);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      let res = await axios.get(`/api/category-list?bookId=${book?.id}`);
      let data = res.data;
      setCategories(data.categoryArray);
    })();
  }, []);

  return (
    <div
      onClick={() => router.push(`/books/${book?.id}`)}
      className="flex flex-col items-center bg-[#F8FAE5] border border-[#ffecd6] rounded-lg shadow md:flex-row hover:border-[3px] hover:border-[#76453B] gap-x-8 p-3"
    >
      <Image
        width={55}
        height={75}
        src={`/${book?.cover ?? "sample-cover.jpg"}`}
        className="pl-2 basis-1/12 rounded-lg  object-cover rounded-t-lg  md:rounded-none md:rounded-s-lg h-[75px]"
        alt="book image"
      />
      <div className="basis-3/12 flex flex-col justify-between leading-normal">
        <p className=" mb-1">{book?.title}</p>
        <p className="text-gray-700 text-[13px]">
          {book?.author.name + " " + (book?.publishedYear ?? "")}
        </p>
      </div>
      {/* <div className="basis-1/12">
        <span>{0}</span>
        <span className="text-xs text-gray-500">/5</span>
      </div> */}
      <div className="basis-3/12 flex flex-col justify-between leading-normal gap-y-0.5">
        {categories.length > 0 &&
          categories.map((c) => (
            <p className="text-gray-700 text-[13px]">{c}</p>
          ))}
      </div>
      <div className="basis-2/12 flex flex-col gap-y-1 text-[13px]">
        {[
          { label: "Hard Copy", value: "HardCopy" },
          { label: "E-Book", value: "EBook" },
          { label: "Audio book", value: "Audiobook" },
        ].map((f) => (
          <p key={f.value}>
            {book?.availability.includes(f.value) ? (
              <Image src={check} className="inline me-2" alt="availability" />
            ) : (
              <Image src={cross} className="inline me-2" alt="availability" />
            )}
            {f.label}
          </p>
        ))}
      </div>
      <div className="basis-1/12">
        <p className="bg-[#42BB4E] text-white text-[13px] p-1 px-3 rounded-md">
          {book?.status}
        </p>
      </div>
      <button
        className="basis-1/12 "
        onClick={async (e) => {
          e.stopPropagation();
          setLiked(!liked);
          if (liked) {
            await axios.delete(
              `/api/lists?bookId=${book?.id}&listType=Favorites`
            );
            setLiked(false);
          } else {
            await axios.post("/api/lists", {
              bookIdArray: [book.id],
              listType: "Favorites",
            });
            setLiked(true);
          }
        }}
      >
        {liked ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z"
                fill="#D21E1E"
                stroke="#D21E1E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        ) : (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z"
                stroke="#D21E1E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        )}
      </button>
      <div className="basis-1/12">
        <button className="text-[#76453B] text-[13px] border-2 border-[#76453B] hover:text-white hover:bg-[#76453B] focus:ring-2 focus:ring-[#B19470] p-1 px-3 rounded-md">
          Review
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
