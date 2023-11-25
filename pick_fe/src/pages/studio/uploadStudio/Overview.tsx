import { FC } from "react";

const Overview: FC = () => {
  document.title = "Create your studio - Pickastudio";

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[80%] h-full max-md:w-[90%] gap-10 grid grid-cols-2 max-md:flex max-md:flex-col max-md:gap-5">
        {/* title */}
        <div className="flex place-items-center justify-center ">
          <h1 className="font-normal max-md:text-[1.78rem] max-lg:text-[2.2rem] max-md:leading-tight leading-[4rem] text-[3.29rem] max-w-[514px]">
            It’s easy to get started on Pickastudio
          </h1>
        </div>

        {/* steps indicator */}
        <div className="w-full h-[80%] m-auto grid grid-rows-3 gap-10">
          {/* one */}
          <div className="grid grid-cols-[.1fr,1fr,.3fr] gap-5">
            <div className=" font-semibold text-2xl max-md:text-xl">1</div>
            <div className="">
              <h1 className="text-xl font-semibold">
                Tell us about your studio
              </h1>
              <p className="text-lg font-normal mt-3 text-gray-600 leading-tight">
                Share some basic info, like the studio location and how many
                people it can contain.
              </p>
            </div>
            <div className="bg-slate-500 h-full w-full">
              <img src="" alt="image" className="object-contain" />
            </div>
          </div>

          {/* two */}
          <div className="grid grid-cols-[.1fr,1fr,.3fr] gap-5">
            <div className=" font-semibold text-2xl max-md:text-xl">2</div>
            <div className="">
              <h1 className="text-xl font-semibold">Make it different</h1>
              <p className="text-lg font-normal mt-3 text-gray-600 leading-tight">
                Add 5 or more photos of your studio plus a title and
                description—we’ll help you out.
              </p>
            </div>
            <div className="bg-slate-500 h-full w-full">
              <img src="" alt="image" className="object-contain" />
            </div>
          </div>

          {/* three */}
          <div className="grid grid-cols-[.1fr,1fr,.3fr] gap-5">
            <div className=" font-semibold text-2xl max-md:text-xl">3</div>
            <div className="">
              <h1 className="text-xl font-semibold">Finish up and publish</h1>
              <p className="text-lg font-normal mt-3 text-gray-600 leading-tight">
                Set a starting price, and publish your listing.
              </p>
            </div>
            <div className="bg-slate-500 h-full w-full">
              <img src="" alt="image" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
