"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { Label, Modal } from "flowbite-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1).max(255),
  about: z.string().min(1),
});

const CreateAuthorModal = ({
  openModal,
  setOpenModal,
  setIsLoading,
  setOptions,
  options,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOptions: React.Dispatch<
    React.SetStateAction<{ value: number; label: string }[]>
  >;
  options: { value: number; label: string }[];
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [error, setError] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const res = await axios.post("/api/authors", values);

      const { id, name } = res.data;
      setOptions([...options, { value: id, label: name }]);

      setOpenModal(false);
      setIsLoading(false);
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
        size="3xl"
        onClose={onCloseModal}
      >
        <Modal.Header className="bg-[#43766C] text-white">
          <h3 className="text-white">Add a new Author</h3>
        </Modal.Header>
        <Modal.Body className="bg-[#43766C] py-3">
          <form
            className=" accent-[#76453B] flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-1 block ">
                <Label
                  htmlFor="name"
                  className="text-white"
                  value="Author Name"
                />
              </div>
              <input
                type="text"
                id="topbar-search"
                className="accent-[#76453B] placeholder-[#76453B] text-[#76453B] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#76453B] focus:border-[#76453B] block w-full p-2.5  "
                placeholder="Author name"
                {...register("name")}
              />
            </div>
            <div className="h-[190px]">
              <div className="mb-1 block ">
                <Label
                  htmlFor="about"
                  className="text-white"
                  value="About Author"
                />
              </div>
              <Controller
                name="about"
                control={control}
                render={({ field }) => (
                  <SimpleMDE
                    placeholder="about..."
                    className=" p-0 overflow-y-auto accent-[#76453B] placeholder-[#76453B]"
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <button
                type="submit"
                className="text-[#76453B] bg-[#F8FAE5] hover:bg-[#76453B] hover:text-[#F8FAE5] focus:ring-2 focus:ring-[#B19470] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CreateAuthorModal;
