import { FC } from "react";
import { ProductProps } from "../components";

import img1 from "../assets/jpg/Menstylica.jpeg";
import img2 from "../assets/jpg/suit.jpeg";
import img3 from "../assets/jpg/SHOES.jpeg";
import img4 from "../assets/jpg/INSTASHOP.jpeg";
import profile from "../assets/jpg/profile.jpeg";
import { getSigninAccount } from "../api/authAPI";
import { useEffect } from "react";
import { FcMusic } from "react-icons/fc";
import { searchStudioHooks } from "../hooks/studioHooks";
import { useParams } from "react-router-dom";
import moment from "moment";

const Categories: FC = () => {
  document.title = "Category - Pickastudio";

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

  useEffect(() => {
    getSigninAccount().then((res) => {
      console.log("reading: ", res);
    });
  }, []);
  const { studio } = useParams();
  const { viewSearchStudio, isLoading } = searchStudioHooks(studio!);

  return (
    <div>
      {/* category title */}
      <div className="py-5 border-b flex items-center gap-2">
        <h2 className="text-3xl font-bold">
          <FcMusic />
        </h2>
        <h4 className="text-[20px] font-bold">Studio for {studio} Category </h4>
      </div>

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full mt-6 m-auto grid gap-6 place-items-center grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
            <div>
              {viewSearchStudio.length > 0 ? (
                <div>
                  {viewSearchStudio?.map((props: any) => (
                    //  <div>
                    <ProductProps
                      props={props}
                      key={props._id}
                      cover={dummyImage}
                      authorCover={profile}
                      authorName="Eloy"
                      place={props?.studioName}
                      rating={props.studioRate}
                      amount={props.studioPrice.toLocaleString()}
                      date={moment(props?.createdAt).format("LLL")}
                      route="/products"
                      userRoute="/user"
                      wishlistFunc={() => {}}
                    />
                    //  </div>
                  ))}
                </div>
              ) : (
                <>No Data yet</>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
