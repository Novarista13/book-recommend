import React, { useEffect, useRef, useState } from "react";
import SingleReview from "./SingleReview";

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

const Reviews = ({ book }: { book: {} }) => {
  const contentRef = useRef(null);
  const isVisible = useIsVisible(contentRef);

  return (
    <div ref={contentRef} className="overflow-y-auto max-h-[400px]">
      {isVisible && (
        <div className="columns-1 md:columns-2 gap-6 space-y-6 py-2">
          {[
            "Captivating plot twists and vibrant characters make this book a page-turner from start to finish.",

            "The author's unique voice shines through in every sentence, making for a truly memorable read.",

            "From the moment I cracked open the spine of this book, I was transported to a world of wonder and enchantment. The author's lyrical prose swept me away on a magical journey, where every page was a revelation and every character felt like an old friend. With its richly detailed world-building and deeply emotional storytelling, this book is a true masterpiece that will stay with me long after I've turned the final page.",

            "This book is a must-read for anyone who loves a good adventure story.",

            "I couldn't put this book down; it kept me up all night turning pages.",

            "What sets this book apart is its ability to seamlessly blend elements of fantasy, mystery, and romance into a cohesive and compelling narrative. From the intricately woven plot to the fully realized characters, every aspect of this book is crafted with care and attention to detail. It's a story that defies genre conventions and delivers a reading experience that is both exhilarating and thought-provoking. I found myself completely immersed in the world of the story, eagerly turning pages to uncover its many secrets and surprises.",

            "A beautifully written novel that effortlessly transports readers to another world.",

            "This book is a roller-coaster of emotions, leaving readers laughing and crying in equal measure.",
            "This book is a triumph of storytelling, a sweeping epic that spans generations and continents to tell a tale of love, loss, and redemption. From the bustling streets of New York City to the windswept moors of Scotland, the author's vivid descriptions paint a vivid picture of the world in which the characters live and breathe. But it is the characters themselves that truly shine, each one fully realized and utterly unforgettable. I laughed with them, I cried with them, and I cheered them on every step of the way.",

            "An intriguing mystery that keeps readers guessing until the very end.",

            "A heartwarming tale of friendship and resilience that will stay with you long after you've finished reading.",

            "Reading this book was like taking a journey into the unknown, where every twist and turn of the plot kept me on the edge of my seat. The author's skillful pacing and deft plotting ensured that the tension never let up, leaving me guessing until the very end. But it was the depth of the characters and the richness of the world-building that truly set this book apart. I felt as though I had stepped into another world, one filled with danger, intrigue, and unbridled adventure.",

            "The author's descriptive prose paints vivid imagery, bringing the story to life in the reader's mind.",

            "This book is a testament to the power of storytelling to transport us to new worlds and expand our horizons. With its richly imagined setting and compelling cast of characters, it offers readers an immersive reading experience that is both thrilling and thought-provoking. From the first page to the last, I was completely captivated by the story, eagerly turning pages to uncover its many mysteries and revelations. It's a book that lingers in the mind long after the final chapter has been read, leaving behind a sense of wonder and awe.",
          ].map((t) => (
            <SingleReview key={t} text={t} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
