import Form from "./form";
import Recommend from "./recommend";

const NewBookPage = () => {
  return (
    <div className="flex flex-row my-[3%] gap-x-9">
      <Form />
      <Recommend />
    </div>
  );
};

export default NewBookPage;
