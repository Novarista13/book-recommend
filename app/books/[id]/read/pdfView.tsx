"use client";
import { useState } from "react";
import { pdfjs, Document, Page, Thumbnail } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import bookImage from "../../../../public/book.jpg";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type PDFFile = string | File | null;

const PdfView = ({ handleFullscreen }: any) => {
  // const [pdf, setPdf] = useState<PDFFile>("/test.pdf");
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [view, setView] = useState("double");
  const [showSide, setShowSide] = useState(false);
  const [showNote, setShowNote] = useState(true);
  const [currentBrowser, setCurrentBrowser] = useState(navigator.userAgent);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: any) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    view === "single" ? changePage(-1) : changePage(-2);
  }

  function nextPage() {
    view === "single" ? changePage(1) : changePage(2);
  }

  // function onItemClick({ pageNumber: itemPageNumber }: any) {
  //   setPageNumber(itemPageNumber);
  // }

  const handleCloseSide = () => setShowSide(false);
  const handleShowSide = () => setShowSide(true);

  return (
    <>
      <Navbar
        className={`fixed z-10 ${
          currentBrowser.includes("Chrome")
            ? "w-[-webkit-fill-available]"
            : "w-[-moz-available]"
        }`}
        fluid
        style={{
          boxShadow: "0px 10px 10px 0px rgba(9, 5, 29, 0.171)",
          backdropFilter: "blur(15px)",
          background: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <Link className="fixed flex items-center justify-center" href="/books">
          <button className="flex items-center justify-center gap-x-1 text-sm text-[#76453B]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 19.5L8.25 12L15.75 4.5"
                stroke="#76453B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </Link>
        {view === "scroll" && (
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="fixed z-10 inline-flex items-center p-2 ml-[81px] text-sm text-[#76453B] rounded-lg cursor-pointer hover:text-[#F8FAE5] hover:bg-[#76453B] focus:bg-[#76453B]  focus:text-[#F8FAE5] focus:ring-2 focus:ring-[#F8FAE5]"
            onClick={showSide ? handleCloseSide : handleShowSide}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        )}
        <Navbar.Brand className="ml-[136px]">
          <Image
            width={20}
            height={20}
            src={bookImage}
            className="my-1"
            alt="book image"
          />
          <div className="ml-4">
            <p className="text-[9px] text-gray-700">Don’t Make Me Think</p>
            <p className="text-gray-700 text-[8px]">Steve Krug, 2000</p>
            <p className="text-gray-500 text-[7px]">Second Edition</p>
          </div>
        </Navbar.Brand>
        {view !== "scroll" && (
          <div className="flex  items-center justify-center  gap-x-4 ">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 19.5L8.25 12L15.75 4.5"
                  stroke={pageNumber <= 1 ? "#B19470" : "#76453B"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="inline text-[#76453B] text-xs">
              {pageNumber + 1 <= numPages && view === "double"
                ? pageNumber + " & " + (pageNumber + 1)
                : pageNumber || (numPages ? 1 : "--")}{" "}
              of {numPages || "--"}
            </p>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 4.5L15.75 12L8.25 19.5"
                  stroke={pageNumber >= numPages ? "#B19470" : "#76453B"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="float-right gap-x-5 flex items-center">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.645 21.4107L11.6384 21.4072L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4072L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z"
              fill="#F34040"
            />
          </svg>
          <button
            className="text-[#76453B] border-2 border-[#76453B] hover:text-white hover:bg-[#76453B] focus:ring-2 focus:ring-[#B19470] p-1 px-3 text-sm rounded-lg"
            onClick={handleFullscreen}
          >
            Full Screen
          </button>

          <Dropdown
            label="view"
            className=" bg-[#F8FAE5] rounded-lg border-2 border-[#76453B] "
            renderTrigger={() => (
              <div className="group">
                <button className="text-[#76453B] border-2 border-[#76453B] group-hover:text-white group-hover:bg-[#76453B] focus:ring-2 focus:ring-[#B19470] p-1 px-3 text-sm rounded-lg">
                  View
                  <svg
                    width="13"
                    height="7"
                    viewBox="0 0 13 7"
                    className="pl-1 inline group-hover:text-white w-4 h-4 text-[#76453B] dark:text-gray-400"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.17585 6.38027C6.79349 6.73088 6.20651 6.73088 5.82415 6.38027L1.03312 1.98704C0.360988 1.37072 0.797034 0.25 1.70896 0.25L11.291 0.25C12.203 0.25 12.639 1.37072 11.9669 1.98704L7.17585 6.38027Z" />
                  </svg>
                </button>
              </div>
            )}
          >
            {["single", "double", "scroll"].map((v) => (
              <Dropdown.Item
                key={v}
                className="hover:bg-[#76453B] hover:text-[#F8FAE5] focus:bg-[#76453B] focus:text-[#F8FAE5]"
                onClick={() => setView(v)}
              >
                <span className="px-3 capitalize">{v}</span>
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      </Navbar>

      <Document
        file="/test.pdf"
        className="flex flex-row fixed gap-x-4 pl-5"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <aside
          className={`h-screen mt-16 transition-transform   ${
            showSide ? "translate-x-0" : "-translate-x-full opacity-0"
          } ${
            view !== "double" ? "basis-1/5" : "hidden"
          } -translate-x-full z-10 `}
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div
            className="overflow-y-auto flex flex-col gap-y-2 p-2 h-full rounded-lg"
            style={{
              boxShadow: "0px 10px 10px 0px rgba(9, 5, 29, 0.171)",
              backdropFilter: "blur(15px)",
              background: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Thumbnail
                key={`thumbnail_${index + 1}`}
                className={`custom-classname-thumbnail ${
                  numPages === index + 1 && "mb-[7rem]"
                }`}
                pageNumber={index + 1}
                width={165}
              />
            ))}
          </div>
        </aside>

        {view === "double" && (
          <div
            className="basis-4/5 overflow-y-auto h-screen flex flex-row gap-x-1 mt-16 "
            onClick={handleCloseSide}
          >
            <Page
              pageNumber={pageNumber}
              className="pdf-single-page mb-[8rem]"
              renderTextLayer={false}
              width={355}
            />
            {pageNumber + 1 <= numPages && (
              <Page
                pageNumber={pageNumber + 1}
                className=" pdf-single-page mb-[8rem]"
                renderTextLayer={false}
                width={355}
              />
            )}
          </div>
        )}
        {view === "single" && (
          <div
            className="overflow-y-auto h-screen mt-16"
            onClick={handleCloseSide}
          >
            <Page
              pageNumber={pageNumber}
              className=" pdf-single-page mb-[8rem]"
              renderTextLayer={false}
            />
          </div>
        )}
        {view === "scroll" && (
          <div
            className="basis-3/5 flex overflow-y-auto h-screen flex-col gap-y-2 mt-16"
            onClick={handleCloseSide}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                className={`pdf-single-page ${
                  numPages === index + 1 && "mb-[8rem]"
                }`}
                renderTextLayer={false}
              />
            ))}
          </div>
        )}

        <aside
          className={`basis-1/5 max-w-[185px] p-3 overflow-y-auto h-[400px] rounded-lg  mt-16 ${
            showNote ? "opacity-1" : "opacity-0"
          }  z-10 `}
          aria-label="Sidenav"
          id="drawer-navigation"
          style={{
            boxShadow: "0px 10px 10px 0px rgba(9, 5, 29, 0.171)",
            background: "white",
          }}
        >
          <button
            className="absolute inline-flex rounded-full -top-2 -end-2"
            style={{
              boxShadow: "0px 10px 10px 0px rgba(9, 5, 29, 0.171)",
              background: "white",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width={24}
              className="m-3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 2 7.6 2 9 2h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 3.9 19 4.6 19 6v13.208c0 1.056 0 1.583-.217 1.856a1 1 0 0 1-.778.378c-.349.002-.764-.324-1.593-.976L12 17l-4.411 3.466c-.83.652-1.245.978-1.594.976a1 1 0 0 1-.778-.378C5 20.791 5 20.264 5 19.208V6z"
                fill="#F76B56"
              ></path>
            </svg>
          </button>

          <form className="max-w-sm h-full mx-auto">
            <textarea
              id="message"
              className="block p-2.5 focus:ring-0 focus:border-0 h-full w-full text-gray-900  rounded-lg border-0 dark:bg-gray-700 placeholder-[#C0C0C0] text-[15px] dark:text-white "
              placeholder="Write your Notes Here..."
            ></textarea>
          </form>
        </aside>
      </Document>
    </>
  );
};

export default PdfView;
