import React, { FC } from "react";
import { useSingleUser } from "../../hooks/userHooks";
import pix from "../../assets/logo.png";
import { singleStudioHooks } from "../../hooks/studioHooks";

interface iProps {
  props?: any;
  studioProps?: any;
  name?: boolean;
  image?: boolean;
  studio?: boolean;
}
const ViewingClientScreen: FC<iProps> = ({
  studioProps,
  props,
  studio,
  image,
  name,
}) => {
  const { singleUser } = useSingleUser(props);
  const { singleStudio } = singleStudioHooks(studioProps);

  return (
    <div>
      <div>
        {name && (
          <p>
            {singleUser?.firstName
              ? `${singleUser?.lastName} ${singleUser?.firstName} `
              : "No Name Yet"}
          </p>
        )}
        {studio && (
          <p>
            {singleStudio?.studioName
              ? `${singleStudio?.studioName} `
              : "No Name Yet"}
          </p>
        )}
      </div>
      <div>
        {image && (
          <p>
            <img
              className="w-14 h-14 rounded-md border object-cover"
              src={singleUser?.avatar ? singleUser?.avatar : pix}
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewingClientScreen;
