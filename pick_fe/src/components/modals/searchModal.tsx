import { AuthBar, Logo, ProductProps } from "..";
import { BiSearch } from "react-icons/bi";
import "./style.css";
import { studioHooks } from "../../hooks/studioHooks";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/studio/2.jpg";
import img3 from "../../assets/studio/4.jpg";
import img4 from "../../assets/studio/5.jpg";
import moment from "moment";

import profile from "../../assets/jpg/profile.jpeg";
import { FC, useEffect, useState } from "react";

const SearchModal: FC = () => {
  const { allStudio, isLoading } = studioHooks();
  const dummyImage = [
    img1,
    img3,
    img4,
    img2,
    img1,
    img3,
    img4,
    img2,
    img1,
    img3,
    img4,
    img2,
  ];
  const [studioData, setStudioData] = useState<Array<{}>>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setStudioData(
      allStudio.filter((el: any) => {
        return el.studioName.includes(search);
      })
    );
  }, [search]);

  const myData = Array.from({ length: 10 });

  return (
    <div className="relative flex flex-col">
      <div className="fadeIn fixed inset-0 transition-all cursor-default ease-in duration-50 bg-[#00000080] z-50">
        <div
          className=" w-full pt-3 pb-6 bg-white px-[5%] z-10 cursor-default flex-col gap-5"
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          {/* top */}
          <div className="flex  items-center justify-between max-md:justify-center max-md:mb-3">
            {/* logo */}
            <div className="h-full  w-[100px] flex items-center max-md:hidden">
              <Logo />
            </div>

            {/* serach by */}
            <div className="flex gap-8 ease-in transition-all text-[15px] ">
              <p className="border-b-2 pb-1 font-medium border-black max-md:text-sm">
                country
              </p>
              <p className="border-b-2 pb-1 font-medium  max-md:text-sm">
                capacity
              </p>
              <p className="border-b-2 pb-1 font-medium  max-md:text-sm">
                experience
              </p>
            </div>

            {/* auth */}

            <div>
              <AuthBar />
            </div>
          </div>

          {/* bottom */}
          <div className="flex justify-center">
            <div className="w-[55%] max-lg:w-[70%] rounded-full bg-[#DDDDDD]  relative max-md:w-full    ease-in transition-all  flex items-center justify-between overflow-hidden py-2 pr-4 pl-6 border-[1px] gap-6">
              <input
                type="search"
                placeholder="search for studios by their Names"
                id=""
                className="flex-1 max-md:text-normal h-full bg-transparent outline-none border-0"
                value={search}
                onChange={(e: any) => {
                  setSearch(e.target.value);
                }}
              />

              <button
                type="submit"
                style={{ background: "var(--gradient)" }}
                className="px-4 py-3 max-md:py-1 max-md:px-2 font-medium transition-all ease-in hover:shadow-md text-white rounded-full flex items-center gap-2"
              >
                <BiSearch /> Search
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-50 m-5  ">
          {search === "" ? (
            <div className="w-[calc(100vw-70px)] m-auto flex items-center justify-center gap-6 p bg-white p-4 rounded-lg ">
              <p className="text-center font-semibold italic text-[#8c0707] ">
                Type a key word to Make <br /> a search for a studio
              </p>
            </div>
          ) : (
            <div className="w-full m-auto grid gap-6 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white p-4 rounded-lg overflow-y-scroll ">
              {studioData?.map((props: any, i: number) => (
                // <div>
                <ProductProps
                  props={props}
                  key={`${i}`}
                  cover={
                    props.studioImages.length > 0
                      ? props.studioImages
                      : dummyImage
                  }
                  authorCover={profile}
                  authorName={props.studioName}
                  place={props.studioName}
                  rating={props.studioRate}
                  amount={props.studioPrice.toLocaleString()}
                  amountHourly={props?.studioPriceDaily?.toLocaleString()}
                  date={`${moment(props.createdAt).fromNow()}`}
                  route={`/products/${props._id}`}
                  userRoute={`/user/${props.accountHolderID}`}
                />
                // </div>
              ))}

              {/* start */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
