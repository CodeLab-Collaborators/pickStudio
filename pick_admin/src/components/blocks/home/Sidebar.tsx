import React from 'react'

const Sidebar:React.FC = () => {
  return (
    <div className='w-[80px] sticky top-0 h-screen border-r bg-white shadow-sm '>
      {/* logo */}
      <div className='border-b py-5 flex place-content-center'>
        Logo
      </div>
    </div>
  )
}

export default Sidebar