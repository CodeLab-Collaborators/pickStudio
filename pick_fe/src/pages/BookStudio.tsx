import React from "react";
import {
  Header,
  MobilePriceDetails,
  Payment,
  StickyPrice,
  UserPurchase,
} from "../components/blocks/BookStudio";
import { useParams } from "react-router-dom";
import { singleStudioHooks } from "../hooks/studioHooks";
import AppScrollToTop from "../routes/AppScrollToTop";

const BookStudio: React.FC = () => {
  const { productID } = useParams();

  const { singleStudio } = singleStudioHooks(productID!);

  document.title = `Request to book ${singleStudio?.studioName}`;

  return (
    <div className="h-[100%] flex bg-white justify-center w-full overflow-x-hidden">
      <AppScrollToTop />
      <div className="w-full md:w-[90%] h-fit flex justify-between">
        <div className="w-full flex flex-col md:bg-white  bg-slate-200 gap-3 md:gap-0 md:w-[50%]">
          <Header />
          <UserPurchase />
          <MobilePriceDetails />
          <Payment />
          {/* <Login /> */}
        </div>
        <div className="w-[40%] bg-white hidden md:flex relative h-screen ">
          <div className="sticky top-40 w-full  h-fit">
            <StickyPrice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStudio;
