import { FC, useState } from "react";
import GlobalInput from "../../props/GlobalInput";
import { useFormSteps1 } from "../../../global/globalState";

const StudioLocation: FC = () => {
  const [formStep1, setFormStep1]: any = useFormSteps1();

  const getStoredData = () => {
    const storedData = localStorage.getItem("uploadStudioData");
    return storedData ? JSON.parse(storedData).studioAddress : "";
  };

  const [studioAddress, setStudioAddress] = useState(getStoredData);

  return (
    <div>
      <h1 className="mt-7 font-semibold text-2xl max-md:text-lg">
        Where's your studio located?
      </h1>

      <div className="mt-4">
        <GlobalInput
          type="text"
          placeholder="Address"
          value={formStep1.studioAddress}
          // onChange={handleAddressChange}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setStudioAddress(e.target.value);

            let dataForm = {
              ...formStep1,
              studioAddress: e.target.value,
            };
            setFormStep1(dataForm);
          }}
          required
          maxLength={60}
        />
      </div>
    </div>
  );
};

export default StudioLocation;
