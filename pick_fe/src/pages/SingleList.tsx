import {
  Ad,
  BookSpace,
  GoogleMapBlock,
  ListDetails,
  Offers,
  ProductImage,
  Reviews,
  Thingstoknow,
  Title,
} from "../components/blocks";
import { singleStudioHooks } from "../hooks/studioHooks";
import { Link, useParams } from "react-router-dom";
import { studioReviewHooks } from "../hooks/reviewHooks";
import { useState } from "react";
import { GalleryModal } from "../components/modals";
import { userHooks } from "../hooks/userHooks";
// import { Link, animateScroll as scroll } from "react-scroll";

const SingleList = () => {
  const { productID } = useParams();
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const { data } = userHooks();

  const { singleStudio } = singleStudioHooks(productID!);
  const { studioReview } = studioReviewHooks(productID!);
  document.title = `${singleStudio?.studioName} - Pickastudio`;

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div id="photos" className="w-full flex-col flex items-center pt-3 ">
      <div className="flex overflow-x-scroll no-scrollbar">
        {singleStudio?.studioImages.map((el: any) => (
          <img
            // key={id}
            src={el}
            className=" h-[310px] md:hidden object-top bg-black cursor-pointer"
            onClick={toggleGallery}
          />
        ))}
      </div>

      <div className="w-11/12 pt-5 md:w-full ">
        <Title
          name={singleStudio?.studioName}
          rating={singleStudio?.studioRate}
          reviews={`${studioReview?.studioReview?.length}`}
          place={singleStudio?.studioAddress}
        />
        <ProductImage />

        <div
          id="features"
          className="w-full relative h-[fit-content] mt-4 flex gap-6 "
        >
          {" "}
          <div className="flex flex-col ">
            <Ad props={singleStudio} />
            <ListDetails
              host={singleStudio?.studioName}
              guests={singleStudio?.numberOfGuess}
              // bedrooms={3}
              // beds={6}
              // baths={2}
            />

            <Offers />
          </div>
          {/* flex-1 hidden h-[fit-content] mt-8 sticky top-24 md:flex */}
          <div className="flex-1 hidden md:flex sticky mt-8 top-32 h-[fit-content] ">
            {singleStudio?.accountHolderID !== data?._id && <BookSpace />}
          </div>
        </div>

        {data ? (
          <div className=" md:hidden">
            {singleStudio?.accountHolderID !== data?._id && <BookSpace />}
          </div>
        ) : (
          <Link to="/login">
            <div className="w-full flex justify-center items-center text-[18px] mt-10 font-medium text-[var(--primary)] ">
              Log in to book this space
            </div>
          </Link>
        )}
        {/* <div>Booked</div> */}
        <div id="reviews" className="py-20 px-16 max-md:px-0 max-lg:px-5">
          {/* reviews */}
          {singleStudio?.studioReview.length < 1 ? (
            <div className="flex flex-col items-center">
              <p>No reviews yet</p>{" "}
              <strong className="cursor-pointer text-[var(--primary)]">
                Leave a review?
              </strong>
            </div>
          ) : (
            <>
              <Reviews />
            </>
          )}
        </div>
        {/* map */}
        <div className="py-8 border-t">
          <GoogleMapBlock />
        </div>
        <div>
          <Thingstoknow />
        </div>
      </div>

      {showGallery ? <GalleryModal onClose={toggleGallery} /> : null}
    </div>
  );
};

export default SingleList;
