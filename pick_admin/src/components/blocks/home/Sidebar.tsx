import React from 'react'

const Sidebar:React.FC = () => {
  return (
    <div className='w-[80px] sticky top-0 h-screen border-r bg-white shadow-sm max-lg:w-full max-lg:h-[70px] max-lg:border-b '>
      {/* logo */}
      <div className='border-b max-lg:border-0 py-5 flex place-content-center'>
        Logo
      </div>
    </div>
  )
}

export default Sidebar