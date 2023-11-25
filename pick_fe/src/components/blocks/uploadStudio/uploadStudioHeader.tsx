import { GlobalButton, Logo } from "../.."


const uploadStudioHeader = () => {
  return (
    <div className="w-[90%] bg-white m-auto h-[8vh] z-40 sticky top-0 flex items-center justify-between">
        {/* logo */}
        <div className="w-[90px] max-md:hidden">
            <Logo/>
        </div>

        {/* button */}
        <GlobalButton style={{color: "black", borderRadius:"999px", padding: "5px 15px"}} children="save & exit" onClick={()=>{}} className="rounded-full border "/>
    </div>
  )
}

export default uploadStudioHeader