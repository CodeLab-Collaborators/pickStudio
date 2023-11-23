import { FC } from "react";
import { UserBlock, UserPostBlock } from "../components/blocks";

const Profile: FC = () => {
  document.title = "(Studio name) profile - Pickastudio";

  return (
    <div>
      <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
        {/* profile */}
        <UserBlock />

        {/* user ppst details */}
        <UserPostBlock />
      </div>
    </div>
  );
};

export default Profile;
