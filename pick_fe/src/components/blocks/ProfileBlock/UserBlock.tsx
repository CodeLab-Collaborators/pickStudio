import ConfirmedDetailsBlock from "./ConfirmedDetailsBlock";
import ProfileBox from "./ProfileBox";

const UserBlock = () => {
  return (
    <div className="w-[30%] h-fit sticky top-[138px] flex flex-col gap-6  items-center max-lg:my-6 max-lg:w-full max-lg:static max-lg:pb-6">
      {/* profile avatar */}
      <ProfileBox />

      {/* confirmed details block */}
      <ConfirmedDetailsBlock />
    </div>
  );
};

export default UserBlock;
