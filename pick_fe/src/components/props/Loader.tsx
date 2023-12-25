import React from "react";
import ContentLoader from "react-content-loader";

const DoorDashFavorite = (props: any) => (
  <ContentLoader
    width={270}
    height={250}
    viewBox="0 0 450 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
    <rect x="44" y="323" rx="3" ry="3" width="189" height="6" />
    <rect x="44" y="343" rx="3" ry="3" width="139" height="6" />
    <rect x="42" y="7" rx="10" ry="10" width="360" height="280" />
  </ContentLoader>
);

DoorDashFavorite.metadata = {
  name: "pick a studio", // My name
  github: "codelab", // Github username
  description: "A simple loading screen for data fetching....", // Little tagline
  filename: "pick a studio loader", // filename of your loader
};

export default DoorDashFavorite;
