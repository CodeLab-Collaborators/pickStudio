
import { Outlet } from 'react-router-dom'
import { Footer, StudioHeader } from '..'

const StudioLayout = () => {
  return (
    <div className="bg-white  min-h-screen h-full">
        <StudioHeader/>
        <div className='w-[70%] max-md:w-[90%] m-auto py-4'>

        <Outlet/>
        </div>
        <Footer width='[90%]'/>
    </div>
  )
}

export default StudioLayout