import Form from "./Form/form";
import Success from "./success";

const NewBookPage = () => {
  return (
    <div className="flex flex-col my-[20px] gap-y-5 pr-4 md:ml-[24px]">
      <p className="text-white text-[40px] tracking-wide font-extrabold ">
        Your <span className="text-[#e3c39c]">Recommendation </span>
        Helps Other to Read
      </p>
      <div className="max-w-auto p-7 pb-5 bg-grey-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Form />
        {/* <Success /> */}
      </div>
    </div>
  );
};

export default NewBookPage;
