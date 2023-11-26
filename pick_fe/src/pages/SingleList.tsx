import img1 from "../assets/jpg/Menstylica.jpeg";
import img2 from "../assets/jpg/suit.jpeg";
import img3 from "../assets/jpg/SHOES.jpeg";
import img4 from "../assets/jpg/INSTASHOP.jpeg";
import {
  Ad,
  BookSpace,
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

const SingleList = () => {
  const { productID } = useParams();
  document.title = "page name - Pickastudio";
  const dummyImage = [img1, img3, img4, img2];

  const { singleStudio } = singleStudioHooks(productID!);
  const { studioReview } = studioReviewHooks(productID!);

  return (
    <div className="w-full flex-col flex items-center pt-3 ">
      <div className="flex overflow-x-scroll no-scrollbar">
        {dummyImage.map((el: any) => (
          <img
            // key={id}
            src={el}
            className="w-full h-[300px] md:hidden object-top bg-black"
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
        <div className="w-full relative h-[fit-content] mt-4 flex gap-6">
          <div className="flex flex-col ">
            <Ad />
            <ListDetails
              host="BeCordial"
              guests={7}
              bedrooms={3}
              beds={6}
              baths={2}
            />
            <Offers />
          </div>
          <div className="flex-1 hidden h-[fit-content] mt-8 sticky top-24 md:flex">
            <BookSpace />
          </div>
        </div>
        <div className="py-20 px-16 max-md:px-0 max-lg:px-5">
          <Reviews />
        </div>
        <div>
          <Thingstoknow />
        </div>
      </div>
    </div>
  );
};

export default SingleList;
