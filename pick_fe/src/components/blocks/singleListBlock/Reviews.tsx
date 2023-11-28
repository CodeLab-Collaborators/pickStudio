import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { GlobalButton } from "../..";
import { FunctionComponent } from "react";
import { UserReviews } from "..";
import { useParams } from "react-router-dom";
import { studioReviewHooks } from "../../../hooks/reviewHooks";

const Reviews: FunctionComponent = () => {
  const { productID } = useParams();

  const { studioReview } = studioReviewHooks(productID!);

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
        <AiFillStar />
        {studioReview?.studioRate} ratings &middot;{" "}
        {studioReview?.studioReview?.length} reviews
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8 mt-5 ">
        {studioReview?.studioReview.map((props: any, index: any) => (
          <UserReviews key={index} props={props} />
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
