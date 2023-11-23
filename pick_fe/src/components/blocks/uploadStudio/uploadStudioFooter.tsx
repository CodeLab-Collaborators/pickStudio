import { GlobalButton } from "../.."
import { NavLink, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const uploadStudioFooter = () => {
const location = useLocation()
const navigate = useNavigate()

const RenderButton = ()=>{
    if (location.pathname === "/upload-studio"){
        return    <NavLink to="about-your-studio">
            <GlobalButton style={{background: "var(--gradient)"}} className="font-semibold ">
        Get started
    </GlobalButton>
        </NavLink>
    }else if (location.pathname.includes("about-your-studio")){
        return <NavLink to="">
            <GlobalButton style={{background: "var(--gradient)"}} className="font-semibold ">
        Next
    </GlobalButton>
        </NavLink>
    }
}



  return (
    <div className='w-full py-2  flex items-center justify-between border-t-4'>
        <div className="w-[90%] m-auto flex justify-between">
        <div className="max-md:w-full flex place-items-center">
            <button className="font-semibold underline hover:scale-[1.11] transition-all ease-in" onClick={()=>{
                navigate(-1)
            }}>back</button>
        </div>
            <div className="max-md:w-full">
                {RenderButton()}
            </div>
        </div>
    </div>
  )
}

export default uploadStudioFooter