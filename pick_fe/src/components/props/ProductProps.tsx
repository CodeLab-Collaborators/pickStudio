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

      <ImageSlide
        props={props}
        cover={cover}
        authorCover={authorCover}
        route={route}
        userRoute={userRoute}
        wishlistFunc={wishlistFunc}
      />
      {/* product Text */}
      {/* <Link to={route}> */}
      <ProductFeaturedText
        props={props}
        authorName={authorName}
        place={place}
        rating={rating}
        amount={amount}
        date={date}
      />
      {/* </Link> */}
    </div>
  );
};

export default ProductProps;
