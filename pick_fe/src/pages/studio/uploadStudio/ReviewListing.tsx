import { FC, useState } from "react";
import mm from "../../../assets/jpg/Menstylica.jpeg";
import { ReviewModal } from "../../../components/modals";
import {
  useFormSteps2,
  useFormSteps3,
  useImagesStudio,
} from "../../../global/globalState";
import { RenderButtonCheck } from "../../../components/blocks/uploadStudio/RenderButtonCheck";
import { useSelector } from "react-redux";

const ReviewListing: FC = () => {
  document.title = "Review and publish your listing - Pickastudio";

  const [form2]: any = useFormSteps2();
  const [form3]: any = useFormSteps3();

  const [showModal, setShowModal] = useState(false);

  // const uploadData = localStorage.getItem("uploadStudioData");
  const [images, setImage] = useState(mm);
  const [imageStudio, setImageStudio]: any = useState([]);
  let myImage: any = [];
  const [readImage, setReadImage] = useImagesStudio();

  const uploadImage = (e: any) => {
    const detail = useSelector((state: any) => state.images);
    let file = e.target.files;

    setImageStudio(Object.values(file));
    setReadImage(Object.entries(file));
  };

  localStorage.setItem("images", JSON.stringify(imageStudio));

  //
  return (
    <div>
      <div className="w-[50%] max-lg:w-[70%] max-md:w-[90%] m-auto  h-full flex flex-col justify-center items-start">
        {/* title */}
        <div>
          <h1 className="font-semibold text-5xl max-lg:text-4xl">
            Review your listing
          </h1>
          <p className="mt-6 text-[1.125rem] max-md:text-[1rem] leading-6 text-[#717171] font-normal">
            Here's what we'll show to users. Make sure everything looks good.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-14 max-lg:mt-10 max-lg:grid-cols-1 gap-20 max-lg:gap-12 relative">
          <input
            className="hidden"
            onChange={uploadImage}
            type="file"
            multiple
            id="image"
          />

          <div
            className="bg-white cursor-pointer p-5 shadow-2xl h-[400px] rounded-2xl w-[358px] max-md:w-[100%] "
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            {/* image */}
            <div className="w-full relative h-[85%] overflow-hidden rounded-md">
              <img src={mm} alt="" className="object-cover" />
              <button className="absolute top-3 left-3 px-3 py-2 font-semibold text-sm rounded-md bg-white shadow-md">
                preview
              </button>
            </div>
            {/* post title */}
            <div className="mt-2">
              <h2 className="font-semibold text-[25px] -mt-3 mb-4">
                {form2.studioName}
              </h2>

              {/* price */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="text-[12px] -mt-5">
                    <h4 className="line-through text-[#717171]">
                      ₦
                      {(parseInt(form3.discountPercent) / 100) *
                        parseInt(form3.studioPrice) +
                        parseInt(form3.studioPrice)}
                    </h4>
                    <h4 className="line-through text-[#717171]">
                      ₦
                      {(parseInt(form3.discountPercent) / 100) *
                        parseInt(form3.studioPriceHourly) +
                        parseInt(form3.studioPriceHourly)}
                    </h4>
                  </div>
                  <h4 className="font-medium -mt-5 flex items-center gap-1">
                    <div className="w-full text-[12px] flex flex-col ml-4">
                      {" "}
                      <p className="flex">
                        {" "}
                        ₦{form3.studioPrice} <p className="text-xs">/Daily</p>
                      </p>
                      <p className="flex">
                        {" "}
                        ₦{form3.studioPriceHourly}{" "}
                        <p className="text-xs">/Hourly</p>
                      </p>
                    </div>
                  </h4>
                </div>
                <p className="px-3 py-1 -mt-4 bg-orange-200 rounded-xl text-xs font-semibold ">
                  -{form3.discountPercent}%{" "}
                </p>
              </div>
            </div>
          </div>

          {/* What's next */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-semibold">What's next?</h1>
            <div>
              <h2 className="text-3xl font-normal mt-4">
                Hit the publish button
              </h2>
            </div>
          </div>
        </div>
        {showModal && (
          <ReviewModal
            onClose={() => {
              setShowModal(!showModal);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewListing;
