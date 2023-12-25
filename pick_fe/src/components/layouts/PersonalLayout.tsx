import React from "react";
import PersonalHeader from "../blocks/Personal/PersonalHeader";
import { Outlet } from "react-router-dom";

const PersonalLayout = () => {
  return (
    <div>
      <PersonalHeader />
      <Outlet />
    </div>
  );
};

export default PersonalLayout;
