import { FC, useState } from "react";
import GlobalInput from "../../props/GlobalInput";
import { useFormSteps1 } from "../../../global/globalState";

const StudioSize: FC = () => {
  const [formStep1, setFormStep1]: any = useFormSteps1();

  const [numberOfGuests, setNumberOfGuests] = useState(
    formStep1.numberOfGuests
  );

  return (
    <div>
      <h1 className="mt-7 font-semibold text-2xl max-md:text-lg">
        Number of guests the studio can contain?
      </h1>

      <div className="mt-4">
        <GlobalInput
          type="text"
          placeholder="Number of guests"
          value={formStep1.numberOfGuests}
          // onChange={handleAddressChange}
          onChange={(e: any) => {
            setNumberOfGuests(e.target.value);

            let dataForm = {
              ...formStep1,
              numberOfGuests: e.target.value,
            };
            setFormStep1(dataForm);
          }}
          inputMode="numeric"
        />
      </div>
    </div>
  );
};

export default StudioSize;
