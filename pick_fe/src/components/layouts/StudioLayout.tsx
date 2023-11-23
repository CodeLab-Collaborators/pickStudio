
import { Outlet } from 'react-router-dom'
import { Footer, StudioHeader } from '..'

const StudioLayout = () => {
  return (
    <div className="bg-white min-h-screen h-full">
        <StudioHeader/>
        <Outlet/>
        <Footer width='[90%]'/>
    </div>
  )
}

export default StudioLayout