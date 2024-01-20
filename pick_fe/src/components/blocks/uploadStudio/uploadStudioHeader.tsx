import { Link } from "react-router-dom";
import { GlobalButton, Logo } from "../.."
import { userHooks } from "../../../hooks/userHooks";


const uploadStudioHeader = () => {
  const { data } = userHooks();
  return (
    <div className="w-[90%] bg-white m-auto h-[8vh] z-40 sticky top-0 flex items-center justify-between">
        {/* logo */}
        <div className="w-[90px] max-md:hidden">
            <Logo/>
        </div>

        {/* button */}
        <Link
        to={`/personal/${data?._id}`}
        className="text-black hover:text-black"
      >

        <GlobalButton style={{color: "black", borderRadius:"999px", padding: "5px 15px"}} children="Go back to profile" onClick={()=>{}} className="rounded-full border "/>
      </Link>
    </div>
  )
}

export default uploadStudioHeader