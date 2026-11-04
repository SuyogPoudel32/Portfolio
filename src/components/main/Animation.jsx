import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Animation = () => {
  return (
<div className='flex items-center gap-3'>
      <h1 className="text-sm font-bold">
      <span className='text-white/60'>I am </span>{" "}
      <TypeAnimation
        sequence={[
          'Web Developer',
          1000,
          'Data Scientist',
          1000,
          'Python Developer',
          1000,
          'Tea lover',
          1000,
        ]}
        wrapper="span"
        speed={10}
        repeat={Infinity}
        className="text-[#1EC982]"
      />
    </h1>
    <hr className='h-4 w-[2px] bg-white/20'></hr>
    <span className='bg-[#21f39a] rounded-full h-2 w-2 animate-pulse inline-block mr-3'></span>
    </div>
  )
}

export default Animation
