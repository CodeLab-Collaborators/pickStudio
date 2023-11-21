import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Reviewers } from ".";
import { GlobalButton } from "../..";
import { FunctionComponent } from "react";

const Reviews:FunctionComponent = () => {
  const [visibleReviews, setVisibleReviews] = useState(6); // Number of reviews to initially display
  const totalReviews = 9; // Total number of reviews

  const showMoreReviews = () => {
    const nextBatch = 6;
    const newVisibleReviews = visibleReviews + nextBatch;

    // If all reviews have been loaded, hide the "show more" button
    if (newVisibleReviews >= totalReviews) {
      setVisibleReviews(totalReviews);
    } else {
      setVisibleReviews(newVisibleReviews);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 font-[600] text-lg">
        <AiFillStar /> 4.85 . {totalReviews} reviews
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8 mt-5 ">
        {[...Array(visibleReviews)].map((_, index) => (
          <Reviewers key={index} />
        ))}
      </div>
      {visibleReviews < totalReviews && (
        <div className="mt-8 w-[250px]">
          <GlobalButton
            style={{ background: "var(--primary)" }}
            onClick={showMoreReviews}
          >
            Show more
          </GlobalButton>
        </div>
      )}
    </div>
  );
};

export default Reviews;
