import  { FC } from 'react'
import GlobalInput from '../../props/GlobalInput'

const StudioTitle:FC = () => {
  return (
    <div className=''>
    <h1 className=' font-semibold text-2xl max-md:text-lg'>What is the Name of Your Studio?</h1>
    <p className="max-md:hidden text-[#222222e8] text-base font-normal  mt-2 leading-[1.75rem]">
    Short titles work best. Have fun with it.
    </p>
        {/* <textarea rows={5} autoComplete='off' className=' bg-white border p-[24px] m-h-[50vh] text-[1.375rem] leading-[1.625rem] outline-1'></textarea> */}
        <GlobalInput placeholder='Studio name' type='text'/>
    </div>
  )
}

export default StudioTitle