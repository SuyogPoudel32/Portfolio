import React from 'react'

const item = ({text}) => {
  return (
      <div className='m-auto w-[8rem] text-center px-6 py-2 mt-4 bg-[#ffffff0d]  border rounded-full border-white/10 text-[#21f39ae6] font-semibold text-lg tracking-[0.2em]'>
        <h1>{text}</h1>
      </div>
  )
}

export default item
