"use client";

import Image from "next/image";
import Link from "next/link";

const BookCover = ({ img }: any) => {
  return (
    <div className="w-[190px] min-w-[190px]  bg-[#F8FAE5] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <Image
          width={145}
          height={190}
          src={`/${img ?? "sample-cover.jpg"}`}
          className="mx-auto my-4"
          alt="book image"
        />
      </Link>
      <div className="mx-auto flex flex-row p-6 pt-3 text-center">
        <Link href="#" className="mx-auto">
          <svg
            width="21"
            height="18"
            className="mx-auto"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.82275 17.9566C4.76606 17.9666 4.70791 17.9666 4.651 17.9566C4.47528 17.8843 4.36043 17.7134 4.3596 17.5233V14.2214H2.46214C2.00837 14.2214 1.57337 14.0411 1.25235 13.7203C0.931558 13.3995 0.751465 12.9643 0.751465 12.5107V1.93992C0.751465 1.48614 0.931558 1.05114 1.25235 0.730338C1.57334 0.409341 2.00836 0.229248 2.46214 0.229248H14.6167C14.8518 0.259055 15.0281 0.45895 15.0281 0.696155C15.0281 0.933151 14.8518 1.13325 14.6167 1.16306H2.46214C2.04964 1.16306 1.71509 1.4974 1.71509 1.91011V12.5182C1.71509 12.7165 1.79388 12.9066 1.93396 13.0466C2.07403 13.1867 2.26392 13.2653 2.46214 13.2653H4.82272C5.08264 13.2653 5.29337 13.476 5.29337 13.7359V16.276L8.03521 13.4746C8.1213 13.3797 8.24323 13.3255 8.37122 13.3251H18.6506C18.8489 13.3251 19.0388 13.2465 19.1788 13.1063C19.3191 12.9662 19.3977 12.7763 19.3977 12.5781V5.89197C19.3808 5.75795 19.4223 5.62308 19.5115 5.52178C19.6009 5.42028 19.7295 5.36233 19.8646 5.36233C19.9999 5.36233 20.1285 5.42027 20.2177 5.52178C20.3071 5.62308 20.3486 5.75795 20.3315 5.89197V12.5183C20.3296 12.9656 20.1527 13.3944 19.8385 13.7129C19.5242 14.0312 19.0979 14.214 18.6506 14.2217H8.57291L5.16635 17.7852C5.07985 17.8865 4.95583 17.9484 4.82264 17.957L4.82275 17.9566Z"
              fill="black"
            />
          </svg>
          <p className="text-[9px]">Review</p>
        </Link>
        <Link href="#" className="mx-auto">
          <svg
            width="21"
            height="18"
            className="mx-auto"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.82275 17.9566C4.76606 17.9666 4.70791 17.9666 4.651 17.9566C4.47528 17.8843 4.36043 17.7134 4.3596 17.5233V14.2214H2.46214C2.00837 14.2214 1.57337 14.0411 1.25235 13.7203C0.931558 13.3995 0.751465 12.9643 0.751465 12.5107V1.93992C0.751465 1.48614 0.931558 1.05114 1.25235 0.730338C1.57334 0.409341 2.00836 0.229248 2.46214 0.229248H14.6167C14.8518 0.259055 15.0281 0.45895 15.0281 0.696155C15.0281 0.933151 14.8518 1.13325 14.6167 1.16306H2.46214C2.04964 1.16306 1.71509 1.4974 1.71509 1.91011V12.5182C1.71509 12.7165 1.79388 12.9066 1.93396 13.0466C2.07403 13.1867 2.26392 13.2653 2.46214 13.2653H4.82272C5.08264 13.2653 5.29337 13.476 5.29337 13.7359V16.276L8.03521 13.4746C8.1213 13.3797 8.24323 13.3255 8.37122 13.3251H18.6506C18.8489 13.3251 19.0388 13.2465 19.1788 13.1063C19.3191 12.9662 19.3977 12.7763 19.3977 12.5781V5.89197C19.3808 5.75795 19.4223 5.62308 19.5115 5.52178C19.6009 5.42028 19.7295 5.36233 19.8646 5.36233C19.9999 5.36233 20.1285 5.42027 20.2177 5.52178C20.3071 5.62308 20.3486 5.75795 20.3315 5.89197V12.5183C20.3296 12.9656 20.1527 13.3944 19.8385 13.7129C19.5242 14.0312 19.0979 14.214 18.6506 14.2217H8.57291L5.16635 17.7852C5.07985 17.8865 4.95583 17.9484 4.82264 17.957L4.82275 17.9566Z"
              fill="black"
            />
          </svg>
          <p className="text-[9px]">Review</p>
        </Link>
        <Link href="#" className="mx-auto">
          <svg
            width="21"
            height="18"
            className="mx-auto"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.82275 17.9566C4.76606 17.9666 4.70791 17.9666 4.651 17.9566C4.47528 17.8843 4.36043 17.7134 4.3596 17.5233V14.2214H2.46214C2.00837 14.2214 1.57337 14.0411 1.25235 13.7203C0.931558 13.3995 0.751465 12.9643 0.751465 12.5107V1.93992C0.751465 1.48614 0.931558 1.05114 1.25235 0.730338C1.57334 0.409341 2.00836 0.229248 2.46214 0.229248H14.6167C14.8518 0.259055 15.0281 0.45895 15.0281 0.696155C15.0281 0.933151 14.8518 1.13325 14.6167 1.16306H2.46214C2.04964 1.16306 1.71509 1.4974 1.71509 1.91011V12.5182C1.71509 12.7165 1.79388 12.9066 1.93396 13.0466C2.07403 13.1867 2.26392 13.2653 2.46214 13.2653H4.82272C5.08264 13.2653 5.29337 13.476 5.29337 13.7359V16.276L8.03521 13.4746C8.1213 13.3797 8.24323 13.3255 8.37122 13.3251H18.6506C18.8489 13.3251 19.0388 13.2465 19.1788 13.1063C19.3191 12.9662 19.3977 12.7763 19.3977 12.5781V5.89197C19.3808 5.75795 19.4223 5.62308 19.5115 5.52178C19.6009 5.42028 19.7295 5.36233 19.8646 5.36233C19.9999 5.36233 20.1285 5.42027 20.2177 5.52178C20.3071 5.62308 20.3486 5.75795 20.3315 5.89197V12.5183C20.3296 12.9656 20.1527 13.3944 19.8385 13.7129C19.5242 14.0312 19.0979 14.214 18.6506 14.2217H8.57291L5.16635 17.7852C5.07985 17.8865 4.95583 17.9484 4.82264 17.957L4.82275 17.9566Z"
              fill="black"
            />
          </svg>
          <p className="text-[9px]">Review</p>
        </Link>
      </div>
    </div>
  );
};

export default BookCover;
