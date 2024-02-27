import { useState, useEffect } from "react";
import { useFormSteps3 } from "../../../global/globalState";
import { padStart } from "lodash";

const StudioPrice = () => {
  const [formStep3, setFormStep3]: any = useFormSteps3();

  const [includeDiscount, setIncludeDiscount] = useState(
    formStep3.includeDiscount
  );
  const [discountPercent, setDiscountPercent] = useState(
    formStep3.discountPercent
  );
  const [studioPrice, setStudioPrice] = useState<string>(formStep3.studioPrice);

  const [studioPriceHourly, setStudioPriceHourly] = useState<string>(
    formStep3.studioPriceHourly
  ); //
  const [uploadStudioData, setUploadStudioData] = useState<any>({});

  useEffect(() => {
    // Retrieve stored data from localStorage on component mount
    const storedData = localStorage.getItem("uploadStudioData");
    if (storedData) {
      setUploadStudioData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever there's a change in studio price or discount
    localStorage.setItem(
      "uploadStudioData",
      JSON.stringify({
        ...uploadStudioData,
        studioPrice,
        studioPriceHourly,
        includeDiscount,
        discountPercent,
      })
    );
  }, [studioPrice, studioPriceHourly, includeDiscount, discountPercent]);

  const handleCheckboxChange = () => {
    setIncludeDiscount(!includeDiscount);

    let reviewData = {
      ...formStep3,
      studioPrice,
      includeDiscount: includeDiscount,
      discountPercent,
    };
    setFormStep3(reviewData);
  };

  const handleDiscountPercentChange = (event: any) => {
    setDiscountPercent(event.target.value);

    let reviewData = {
      ...formStep3,
      studioPrice,
      includeDiscount,
      discountPercent: event.target.value,
    };
    setFormStep3(reviewData);
  };

  const handleStudioPriceChange = (event: any) => {
    setStudioPrice(event.target.value);

    let reviewData = {
      ...formStep3,
      studioPrice: event.target.value,
      studioPriceHourly,
      includeDiscount,
      discountPercent,
    };
    setFormStep3(reviewData);
  };

  const handleStudioPriceChangeHourly = (event: any) => {
    setStudioPriceHourly(event.target.value);

    let reviewData = {
      ...formStep3,
      studioPrice,
      studioPriceHourly: event.target.value,
      includeDiscount,
      discountPercent,
    };
    setFormStep3(reviewData);
  };

  return (
    <div>
      <div>
        <h1 className="font-semibold text-3xl max-md:text-lg">
          Now, Set Your Price
        </h1>

        <p className=" text-[#222222e8] text-lg font-normal mt-2 leading-[1.75rem]">
          This is the price for{" "}
          <strong>
            Daily:{" "}
            {formStep3.studioPrice &&
              `₦${parseInt(formStep3.studioPrice).toLocaleString()}`}
          </strong>
        </p>
        <div className="flex flex-col items-center gap-1 w-full justify-center">
          <div className="flex justify-center text-[128px] max-md:text-[90px] items-center">
            <p className="font-bold">₦</p>
            <input
              type="text"
              inputMode="numeric"
              min="0"
              max="100"
              value={formStep3.studioPrice}
              onChange={handleStudioPriceChange}
              className="w-[60%] outline-none font-bold bg-white p-2 rounded-md mt-1 placeholder:font-bold placeholder:text-gray-200"
              placeholder="20000"
            />
          </div>
        </div>

        <p className=" text-[#222222e8] text-lg font-normal mt-2 leading-[1.75rem]">
          This is the price for{" "}
          <strong>
            Hourly:
            {formStep3.studioPriceHourly &&
              ` ₦${parseInt(formStep3.studioPriceHourly).toLocaleString()}`}
          </strong>
        </p>
        <div className="flex flex-col items-center gap-1 w-full justify-center">
          <div className="flex justify-center text-[128px] max-md:text-[90px] items-center">
            <p className="font-bold">₦</p>
            <input
              type="text"
              inputMode="numeric"
              min="0"
              max="100"
              value={formStep3.studioPriceHourly}
              onChange={handleStudioPriceChangeHourly}
              className="w-[60%] outline-none font-bold bg-white p-2 rounded-md mt-1 placeholder:font-bold placeholder:text-gray-200"
              placeholder="20000"
            />
          </div>
        </div>
      </div>

      {/* <div className="mt-4">
        <div className="flex items-center ps-4 border border-gray-200 rounded ">
          <input
            id="bordered-checkbox"
            checked={formStep3.includeDiscount}
            onChange={handleCheckboxChange}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox"
            className="w-full py-4 ms-2 text-base text-gray-900 font-normal "
          >
            Add Discount
          </label>
        </div>

        {!includeDiscount && (
          <div className="mt-2 flex justify-center items-center flex-col">
            <label className="block text-gray-700 font-semibold">
              Discount Percent:
            </label>
            <div className="flex justify-center items-center text-[128px] max-md:text-[90px]">
              <input
                type="string"
                inputMode="numeric"
                min="0"
                maxLength={2}
                value={formStep3.discountPercent}
                onChange={handleDiscountPercentChange}
                className="w-[25%] outline-none p-2 bg-white rounded-md mt-1 font-semibold placeholder:text-gray-600 placeholder:font-semibold"
                placeholder="90"
              />
              <span className="ml-2 text-gray-800 font-bold">%</span>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default StudioPrice;
