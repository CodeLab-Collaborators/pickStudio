import { GlobalButton } from "../..";
import AboutUser from "./AboutUser";
import pix from "../../../assets/logo.png";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../../../hooks/userHooks";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import moment from "moment";
import { UserReviews } from ".";

const UserPostBlock = () => {
  const { userID } = useParams();
  const { singleUser } = useSingleUser(userID!);

  const { singleStudio } = singleStudioHooks(singleUser?.studio[0]);

  // 6571c396e83cfe38d789dd26
  return (
    <div className="w-[70%] h-full  flex flex-col gap-5 max-lg:w-full ">
      {/* about user section */}
      <AboutUser />
      <hr />
      <div className=" flex flex-col gap-4">
        <h1 className="text-3xl font-bold max-md:text-2xl">
          What people are saying about my studios
        </h1>
        {/* user reviews */}
        <div className="w-full grid grid-cols-2 gap-5 max-md:grid-cols-1 py-2">
          {/*  */}
          {singleUser?.studio.length > 0 && (
            <div>
              {" "}
              {singleUser?.studio?.map((props: any) => (
                <UserReviews key={props._id} props={props} />
              ))}
            </div>
          )}
        </div>

        {/* show more reviews button */}
        <div className="w-[200px] ">
          <GlobalButton
            style={{ color: "black" }}
            className="border border-black"
          >
            Top Reviews
          </GlobalButton>
        </div>
        <hr />
      </div>

      {/* user posts */}
      <div className=" flex flex-col gap-4">
        <h1 className="text-3xl font-bold max-md:text-2xl capitalize mt-8 ">
          My Top Performing Studio
        </h1>
        {/* user posts */}
        <div className="grid gap-5 grid-cols-2 max-md:grid-cols-1">
          <div className="border rounded-md w-[300px] h-[420px] mt-6 overflow-hidden relative ">
            <img
              className="w-full h-[280px] object-cover bg-pink-50 "
              src={
                singleStudio?.studioImages?.length > 0
                  ? singleStudio?.studioImages[0]
                  : pix
              }
            />
            <div
              className="flex justify-center items-center rounded-full border w-14 h-14 absolute top-[50%] left-2 text-[20px] text-white "
              style={{ background: "var(--gradient)" }}
            >
              {singleUser?.firstName.charAt(0)}
            </div>

            <div className="mt-4 px-3">
              <p className="flex justify-between">
                <p className="font-medium text-[20px]">
                  {singleStudio?.studioName}
                </p>{" "}
                <span className="font-bold gap-1 flex items-center">
                  ⭐<p>{singleStudio?.studioRate}</p>
                </span>
              </p>
              <p className="text-[13px] mt-2">
                created at: <br />
                <span className="font-medium leading-tight">
                  {moment(singleStudio?.createdAt).format("llll")}
                </span>
              </p>
              <p className="mt-1 text-[14px]">
                Times Booked:{" "}
                <span className="font-bold">
                  {singleStudio?.history?.length}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostBlock;
