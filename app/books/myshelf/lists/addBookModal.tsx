"use client";

import axios from "axios";
import "easymde/dist/easymde.min.css";
import { Label, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import MultiSelect from "./multiSelect";

interface Option {
  readonly label: string;
  readonly value: number;
}

const AddBookModal = ({
  listType,
  openModal,
  setOpenModal,
}: {
  listType: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [books, setBooks] = React.useState<readonly Option[]>([]);
  const [error, setError] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  const addBook = async () => {
    try {
      const bookIdArray: number[] = [];
      books.forEach((b) => {
        bookIdArray.push(b.value);
      });
      await axios.post("/api/lists", { listType, bookIdArray });
      setOpenModal(false);
    } catch (error) {
      setError("Unexpectd error ocuured!");
    }
  };

  return (
    <>
      <Modal
        show={openModal}
        position="center"
        dismissible
        className=" text-white"
        size="xl"
        onClose={onCloseModal}
      >
        <Modal.Header className="bg-[#43766C] text-white">
          <h3 className="text-white">Add New Book</h3>
        </Modal.Header>
        <Modal.Body className="bg-[#43766C] py-3">
          <div className="mb-5">
            <Label
              htmlFor="categories"
              className="text-white mb-1 block"
              value="Books"
            />
            <MultiSelect value={books} setValue={setBooks} />
          </div>
          <div>
            <button
              onClick={addBook}
              className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Add Book
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddBookModal;
