
import { Outlet } from 'react-router-dom'
import { UploadStudioFooter, UploadStudioHeader } from '../blocks/uploadStudio'

const UploadStudioLayout = () => {
  return (
    <div className='bg-white w-full h-full min-h-screen grid grid-rows-[.13fr,1fr,.1fr] gap-3'>
        <UploadStudioHeader/>
        <Outlet/>
        <UploadStudioFooter/>
    </div>
  )
}

export default UploadStudioLayout