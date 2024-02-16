import Form from "./form";
import Recommend from "./recommend";
import Success from "./success";

const NewBookPage = () => {
  return (
    <div className="flex flex-row my-[3%] gap-x-9  md:ml-[24px] pt-[10px]">
      <div className="max-w-lg p-8 bg-grey-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 basis-1/2">
        <Form />
        {/* <Success /> */}
      </div>
      <Recommend />
    </div>
  );
};

export default NewBookPage;