import React, { useEffect, useRef, useState } from "react";
import SingleReview from "./SingleReview";
import ReviewForm from "./ReviewForm";
import axios from "axios";

export interface review {
  id?: number;
  content: string;
  createdAt: string;
  rating: number;
  user: { username: string; image: null | string };
}

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const Reviews = ({ book }: { book: { id: number } }) => {
  const contentRef = useRef(null);
  const isVisible = useIsVisible(contentRef);
  const [reviews, setReviews] = useState<review[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/api/reviews?bookId=${book?.id}`);
        let data = res.data;
        setReviews(data);
      } catch (error) {
        console.log("Fetching Data not successfull!");
      }
    })();
  }, []);
  

  return (
    <div ref={contentRef} className="overflow-y-auto max-h-[400px]">
      <ReviewForm book={book} reviews={reviews} setReviews={setReviews} />
      {isVisible && (
        <div className="columns-1 md:columns-2 gap-6 space-y-6 py-2">
          {reviews?.map((t) => (
            <SingleReview key={t?.id} review={t} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
