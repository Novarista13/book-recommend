import Form from "./form";
import Recommend from "./recommend";
import Success from "./success";

const NewBookPage = () => {
  return (
    <div className="flex flex-row my-[3%] gap-x-9 pr-4 md:ml-[24px]">
      <div className="max-w-xl p-7 pb-5 bg-grey-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-2/3">
        <Form />
        {/* <Success /> */}
      </div>
      <Recommend />
    </div>
  );
};

export default NewBookPage;
