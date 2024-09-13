import { Link } from "react-router-dom";

import { cardData } from "../../types";
import { FC, useState } from "react";
import { ImageSlide, ProductFeaturedText } from ".";
import { useSingleUser } from "../../hooks/userHooks";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ProductProps: FC<cardData> = ({
  cover,
  authorCover,
  authorName,
  rating,
  amount,
  amountHourly,
  date,
  place,
  route,
  userRoute,
  props,
  wishlistFunc,
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
      className="relative flex flex-col gap-1 w-full  my-6 "
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className="relative">
        <div
          className={`absolute left-[3%] h-[265px] w-full ${
            show ? "block" : "hidden"
          }`}
        >
          <div
            className={` ${
              currentImageIndex === 0
                ? "hidden"
                : "w-5 h-5 absolute z-10  rounded-full border left-0 bottom-[40%] overflow-hidden"
            }`}
          >
            <button
              onClick={goToPreviousSlide}
              className={` ${
                currentImageIndex === 0
                  ? "hidden"
                  : "flex scale-150 mr-[3px]  rounded-full border shadow-sm shadow-[black] hover:scale-[1.08] transition-all absolute border-none outline-none focus:outline-none text-[#8E0629] mt-[1px]"
              }`}
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
          </div>

          <div className="w-5 h-5  bottom-[40%] rounded-full border absolute z-10 right-5 overflow-hidden">
            <button
              onClick={goToNextSlide}
              className="scale-150 ml-[2px] shadow-sm shadow-[black] hover:scale-[1.08] transition-all absolute border-none outline-none focus:outline-none text-[#8E0629] mt-[1px]"
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/*product picture */}
      <Link to={route}>
        <ImageSlide
          props={props}
          cover={cover}
          authorCover={authorCover}
          userRoute={userRoute}
          wishlistFunc={wishlistFunc}
          currentImageIndex={currentImageIndex}
        />
        {/* product Text */}

        <ProductFeaturedText
          props={props}
          authorName={authorName}
          place={place}
          rating={rating}
          amount={amount}
          amountHourly={amountHourly}
          date={date}
        />
      </Link>
    </div>
  );
};

export default ProductProps;
