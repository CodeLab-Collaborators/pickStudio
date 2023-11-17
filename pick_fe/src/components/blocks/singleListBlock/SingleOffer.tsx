import React from "react";

type iSimple = {
  icon: any;
  text: string;
  slashed?: boolean;
};

const SingleOffer: React.FC<iSimple> = ({ icon, text, slashed }) => {
  return (
    <div className={`flex gap-4 items-center ${slashed ? "line-through" : ""}`}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SingleOffer;
