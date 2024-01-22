import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '..'


const HomeLayout:React.FC = () => {
  return (
    <div className='flex bg-[#F3F3F3] max-h-full max-lg:flex-col'>
        <Sidebar/>
       <div className='w-full'>
        <Header/>
        <div className='px-5 h-[500vh] py-8'>

       <Outlet/>
        </div>
       </div>
       
    </div>
  )
}

export default HomeLayout