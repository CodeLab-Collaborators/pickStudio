import { useState, FC } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { imageData } from "../../types";
import { Link } from "react-router-dom";
import { useSingleUser } from "../../hooks/userHooks";

const ImageSLide: FC<imageData> = ({
  cover,
  route,
  userRoute,
  wishlistFunc,
  props,
}) => {
  const { singleUser } = useSingleUser(props?.accountHolderID);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setShow] = useState(false);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? cover.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === cover.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      className="relative w-full h-[285px] rounded-2xl"
    >
      {/* wishlist */}

      <div
        className="absolute cursor-pointer text-[#000000ad] shadow-md hover:text-[var(--primary)] text-2xl top-3 right-3 transition-all ease-in duration-75"
        onClick={() => {
          wishlistFunc;
        }}
      >
        <AiTwotoneHeart />
      </div>

      {/* image slide */}
      <Link to={route}>
        <img
          className="w-full h-full rounded-2xl object-cover object-top transition-all ease-in duration-500 max-sm:rounded-none"
          src={cover[currentImageIndex]}
        />
      </Link>
      <div
        className={`w-full ${
          show ? "block" : "hidden"
        } h-7 absolute left-0 top-[45%]`}
      >
        <button
          onClick={goToPreviousSlide}
          className={`h-full shadow-sm shadow-[black] hover:scale-[1.08] transition-all absolute left-1 top-0 border-none outline-none focus:outline-none p-[5px] ml-3 bg-white ${
            currentImageIndex === 0 ? "hidden" : "flex"
          } justify-center items-center rounded-[50%]`}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={goToNextSlide}
          className="h-full shadow-sm shadow-[black] hover:scale-[1.08] transition-all border-none absolute right-1 top-0 outline-none focus:outline-none p-[5px] mr-3 bg-white flex justify-center items-center rounded-[50%]"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>

      {/* link to individual author page */}
      <Link to={userRoute}>
        <div className="absolute w-14 h-14 bottom-3 left-3">
          {singleUser?.avatar ? (
            <img
              className="w-full h-full object-cover object-top shadow-2xl rounded-full  "
              src={singleUser?.avatar}
            />
          ) : (
            <div
              className="w-full h-full object-cover object-top shadow-2xl rounded-full flex justify-center items-center text-white text-[20px]  "
              style={{ background: "var(--gradient)" }}
            >
              {singleUser?.firstName?.charAt(0)}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ImageSLide;
