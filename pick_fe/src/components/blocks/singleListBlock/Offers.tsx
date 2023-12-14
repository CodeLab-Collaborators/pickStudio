import { AiFillStar } from "react-icons/ai";
import { SingleOffer } from ".";
import { GlobalButton } from "../..";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useSingleUser } from "../../../hooks/userHooks";
import { useParams } from "react-router-dom";

const Offers = () => {
  const { productID } = useParams();

  const { singleStudio } = singleStudioHooks(productID!);
  const { singleUser } = useSingleUser(singleStudio?.accountHolderID!);
  return (
    <div className="border-b-[1px] flex flex-col gap-5 border-b-slate-300 py-9">
      <div className="text-2xl font-[600]">What this studio offers</div>
      <div className="flex font-normal flex-col gap-4">
        {singleStudio?.studioFeatures[0]
          ?.split(",")
          ?.map((props: any, index: number) => (
            <div key={index}>
              <SingleOffer icon={<AiFillStar />} text={props} />
            </div>
          ))}
        <SingleOffer
          icon={<AiFillStar />}
          text="Carbon monoxide alarm"
          slashed
        />
        <SingleOffer icon={<AiFillStar />} text="Smoke alarm" slashed />
      </div>
      {singleStudio?.studioFeatures.length > 7 && (
        <GlobalButton
          style={{ color: "black" }}
          className="border-black mt-4 font-[600] w-full py-3 rounded-md border-[1px]"
        >
          Show all {singleStudio?.studioFeatures.length} features
        </GlobalButton>
      )}
    </div>
  );
};

export default Offers;
