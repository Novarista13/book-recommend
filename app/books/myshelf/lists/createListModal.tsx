"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { Label, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MultiSelect from "./multiSelect";
import { lists } from "./Lists";

const FormSchema = z.object({
  listType: z.string().min(1).max(255),
});

interface Option {
  readonly label: string;
  readonly value: number;
}

const CreateListModal = ({
  lists,
  setLists,
  openModal,
  setOpenModal,
}: {
  lists: lists;
  setLists: React.Dispatch<React.SetStateAction<lists>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [books, setBooks] = React.useState<readonly Option[]>([]);
  const [error, setError] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const bookIdArray: number[] = [];
      books.forEach((b) => {
        bookIdArray.push(b.value);
      });
      const { listType } = values;

      await axios.post("/api/lists", { listType, bookIdArray });
      setOpenModal(false);
      setLists({ ...lists, [listType]: [] });
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
          <h3 className="text-white">Create New List</h3>
        </Modal.Header>
        <Modal.Body className="bg-[#43766C] py-3">
          <form
            className=" accent-[#76453B] flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="name"
                  className="text-white"
                  value="List Name"
                />
              </div>
              <input
                type="text"
                id="topbar-search"
                className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                placeholder="List name"
                {...register("listType")}
              />
            </div>
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
                type="submit"
                className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Create List
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CreateListModal;
