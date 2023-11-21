import pic from "../../../assets/jpg/suit.jpeg";

const UserReviews = () => {
  return (
    <div>
      <div className="w-[full]  h-[fit-content] border-[1px] border-[lightgrey] rounded-xl p-[20px] flex flex-col gap-14">
        <div className="text-[14px] md:text-[18px]">
          Isaac is really nice. The communication was very easy. You are
          welcomed to come back to CASA PULPO any time
        </div>
        <div className="flex gap-2">
          <div className=" w-[50px] h-[50px] object-cover">
            <img
              src={pic}
              className="w-[100%] h-[100%] rounded-[50%] object-cover"
              alt=""
            />
          </div>
          <div className="w-[100px] ">
            <div className=" font-semibold text-[black] text-[18px]">
              Juliette
            </div>
            <span className="text-[14px]">January 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
