import { useNavigate } from "react-router-dom"
import { RenderButtonCheck } from "./RenderButtonCheck"




const uploadStudioFooter = () => {

const navigate = useNavigate()



  return (
    <div className='w-full py-2 bg-white sticky bottom-0  flex items-center justify-between flex-col '>
        <div className="grid grid-cols-3 gap-2 w-full py-2">
        <progress value={100} className="w-full h-[6px]" />
        <progress value={100} className="w-full h-[6px]"/>
        <progress value={100} className="w-full h-[6px]"/>
        </div>
        <div className="w-[90%] m-auto flex justify-between max-md:justify-normal max-md:flex-wrap">
        <div className="max-md:w-full flex place-items-center">
            <button className=" max-md:w-full py-2 font-semibold underline hover:scale-[1.11] transition-all ease-in" onClick={()=>{
                navigate(-1)
            }}>back</button>
        </div>
            <div className="max-md:w-full">
                {RenderButtonCheck()}
            </div>
        </div>
    </div>
  )
}

export default uploadStudioFooter