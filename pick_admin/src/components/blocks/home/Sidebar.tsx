import React, {useState} from 'react'
import { FiMenu } from "react-icons/fi";
import logo from "../../../assets/logo.png"


const Sidebar:React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true)


  return (
    <div className={`${toggle ? "w-[80px]" : "w-[250px]"} transition-all duration-300 ease-in sticky top-0 h-screen border-r bg-white shadow-sm max-lg:w-full max-lg:h-[70px] max-lg:border-b`}>
      {/* logo */}
      <div onClick={()=>setToggle(!toggle)} className={`border-b cursor-pointer text-2xl max-lg:border-0 py-5 flex ${toggle ? "place-content-center" : "items-center justify-between px-5 "}`}>
        {!toggle && <div><img src={logo} width={80} className="mx-auto" /></div>}
      <FiMenu />
      </div>
    </div>
  )
}

export default Sidebar