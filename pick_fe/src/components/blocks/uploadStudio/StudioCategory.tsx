import { FC, useEffect, useState } from "react";
import { useFormSteps1 } from "../../../global/globalState";

const StudioCategory: FC = () => {
  const [formStep1, setFormStep1] = useFormSteps1();
  const [selectedStudioCategory, setSelectedStudioCategory] = useState(() => {
    // Retrieve stored data from localStorage on component mount
    const storedData = localStorage.getItem("uploadStudioData");
    return storedData ? JSON.parse(storedData) : {};
  });

  // Sample list of studio categories
  const studioCategories = [
    "Film Production",
    "Music Recording",
    "Game Development",
    "Photography",
    "Dance",
    "Visual Arts",
    "Cooking",
    "Fashion",
    "Radio",
    "Virtual Production",
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
      selectedStudioCategory: category,
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
              console.log("show me: ", handleCategorySelect(category));
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
            className="font-normal"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudioCategory;
