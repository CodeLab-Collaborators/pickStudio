
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
import { useParams } from "react-router-dom";
import { studioReviewHooks } from "../hooks/reviewHooks";
import { useState } from "react";
import { GalleryModal } from "../components/modals";
// import { Link, animateScroll as scroll } from "react-scroll";

const SingleList = () => {
  const { productID } = useParams();
  const [showGallery, setShowGallery] = useState<boolean>(false);
  
  const { singleStudio } = singleStudioHooks(productID!);
  const { studioReview } = studioReviewHooks(productID!);
  
  document.title = `${singleStudio?.studioName} - Pickastudio`;

  // console.log("this is single studio", singleStudio?.studioReview)

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
          <div className="flex flex-col ">
            <Ad />
            <ListDetails
              host={singleStudio?.studioName}
              guests={7}
              bedrooms={3}
              beds={6}
              baths={2}
            />

            <Offers />
          </div>
          {/* flex-1 hidden h-[fit-content] mt-8 sticky top-24 md:flex */}
          <div className="flex-1 hidden md:flex sticky mt-8 top-32 h-[fit-content] ">
            <BookSpace />
          </div>
        </div>
        <div>Booked</div>
        <div id="reviews" className="py-20 px-16 max-md:px-0 max-lg:px-5">
          {/* reviews */}
          {singleStudio?.studioReview.length < 1 ? <div className="flex flex-col items-center"><p>No reviews yet</p> <strong className="cursor-pointer text-[var(--primary)]">Leave a review?</strong></div> : <><Reviews /></>}
         
        </div>
        {/* map */}
        <div className="py-8 border-t">
          <GoogleMapBlock/>
        </div>
        <div >
          <Thingstoknow />
        </div>
      </div>
      {showGallery ? <GalleryModal onClose={toggleGallery} /> : null}
    </div>
  );
};

export default SingleList;
