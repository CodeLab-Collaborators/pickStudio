import React from "react";

const MainLoader = () => {
  const data = Array.from({ length: 10 });

  return (
    <div className=" opacity-70 w-full m-auto grid gap-6 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((props: any, i: number) => (
        <div className="flex flex-col gap-4 w-full mb-10">
          <div className="skeleton h-60 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default MainLoader;

// w-full m-auto grid gap-6 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
