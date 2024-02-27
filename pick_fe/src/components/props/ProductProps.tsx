import { Link } from "react-router-dom";

import { cardData } from "../../types";
import { FC } from "react";
import { ImageSlide, ProductFeaturedText } from ".";

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
  return (
    <div className="flex flex-col gap-1 w-full  my-6 ">
      {/*product picture */}
      <Link to={route}>
        <ImageSlide
          props={props}
          cover={cover}
          authorCover={authorCover}
          userRoute={userRoute}
          wishlistFunc={wishlistFunc}
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
