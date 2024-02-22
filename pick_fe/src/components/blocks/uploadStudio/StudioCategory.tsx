import { FC, useState } from "react";
import { useFormSteps1 } from "../../../global/globalState";
import GlobalInput from "../../props/GlobalInput";

const StudioCategory: FC = () => {
  const [formStep1, setFormStep1]: any = useFormSteps1();

  const [selectedStudioCategory, setSelectedStudioCategory] = useState(() => {
    // Retrieve stored data from localStorage on component mount
    const storedData = localStorage.getItem("uploadStudioData");
    return storedData ? JSON.parse(storedData) : {};
  });

  // for others
  const [state, setState] = useState("");
  const [toggle, setToggle] = useState<boolean>(false);

  // Sample list of studio categories
  const studioCategories = [
    "Film Production",
    "Music Recording",
    "Photography Studio",
    "Dance Studio",
    "Cooking Studio",
    "Podcast/Radio Studio",
  ];

  // Handle the selection of a studio category
  const handleCategorySelect = (category: string) => {
    const updatedData = {
      ...selectedStudioCategory,
      userSelectedCategory: category,
    };

    // Save the updated data in localStorage
    localStorage.setItem("uploadStudioData", JSON.stringify(updatedData));
    setSelectedStudioCategory(updatedData);

    let dataForm = {
      selectedStudioCategory: state !== "" ? state : category,
    };
    setFormStep1(dataForm);
  };

  return (
    <div>
      <h1 className="font-semibold text-2xl max-md:text-lg">
        Which of these best describes your studio?
      </h1>
      <div className="mt-4">
        {studioCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              handleCategorySelect(category);
              // window.location.reload();
              setToggle(false);
            }}
            style={{
              margin: "5px",
              padding: "8px",
              background:
                selectedStudioCategory.userSelectedCategory === category
                  ? "var(--gradient)"
                  : "#ecf0f1",
              color:
                selectedStudioCategory.userSelectedCategory === category
                  ? "#fff"
                  : "#333",
            }}
            className="font-normal "
          >
            {category}
          </button>
        ))}
        <button
          style={{
            margin: "5px",
            padding: "8px",
            background: toggle ? "var(--gradient)" : "#ecf0f1",
            color: toggle ? "white" : "black",
          }}
          className={`font-normal px-10 rounded-sm`}
          onClick={() => {
            if (!document.startViewTransition) {
              setToggle(!toggle);
              if (toggle === false) {
                setState("");
              }
            } else {
              document.startViewTransition(() => {
                setToggle(!toggle);
                if (toggle === false) {
                  setState("");
                }

                if (toggle === true) {
                }
              });
            }
          }}
        >
          Others
        </button>

        {toggle && (
          <div className="mt-4">
            <GlobalInput
              type="text"
              placeholder="Add your studio Category"
              value={formStep1!.selectedStudioCategory!}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);

                handleCategorySelect("");
                // window.location.reload();

                let dataForm = {
                  ...formStep1,
                  selectedStudioCategory: e.target.value,
                };
                setFormStep1(dataForm);
              }}
              required
              maxLength={60}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudioCategory;
