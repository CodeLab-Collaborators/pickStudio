import { FC, useState } from "react";
import GlobalInput from "../../props/GlobalInput";
import { useFormSteps2 } from "../../../global/globalState";

const StudioTitle: FC = () => {
  const [formStep2, setFormStep2]: any = useFormSteps2();

  const [studioName, setStudioName] = useState<string>(formStep2.studioName);
  const [studioDescription, setStudioDescription] = useState<string>(
    formStep2.studioDescription
  );

  return (
    <div className="">
      <h1 className="font-semibold text-2xl max-md:text-lg">
        What is the Name of Your Studio?
      </h1>
      <p className="max-md:hidden text-[#222222e8] text-base font-normal mt-2 leading-[1.75rem]">
        Short titles work best. Have fun with it.
      </p>
      <GlobalInput
        placeholder="Studio name"
        type="text"
        maxLength={50}
        value={formStep2.studioName}
        // onChange={handleStudioNameChange}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStudioName(e.target.value);

          let dataForm = {
            ...formStep2,
            studioName: e.target.value,
          };
          setFormStep2(dataForm);
        }}
      />
      <p className="text-xs font-semibold mt-1 text-red-500">
        Max of 50 characters
      </p>

      {/* studio description */}
      <div className="mt-7">
        <h1 className="font-semibold text-2xl max-md:text-lg">
          Create your description?
        </h1>
        <p className="max-md:hidden text-[#222222e8] text-base font-normal mt-1 leading-[1.75rem]">
          Share what makes your studio special.
        </p>
        {/* text area */}
        <textarea
          maxLength={500}
          rows={6}
          className="mt-4 block p-2.5 w-full text-[1.265rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-200 outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Write your thoughts here..."
          // value={studioDescription}
          // onChange={handleStudioDescriptionChange}

          value={formStep2.studioDescription}
          // onChange={handleStudioNameChange}

          onChange={(e: any) => {
            setStudioDescription(e.target.value);

            let dataForm = {
              ...formStep2,
              studioDescription: e.target.value,
            };
            setFormStep2(dataForm);
          }}
        ></textarea>
        <p className="text-xs font-semibold mt-1 text-red-500">
          Max of 500 characters
        </p>
      </div>
    </div>
  );
};

export default StudioTitle;
