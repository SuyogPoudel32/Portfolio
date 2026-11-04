import React from 'react'
import { useVantaDots } from '../../../useVantaDots';
import { TypeAnimation } from 'react-type-animation';
import { LuSparkles } from "react-icons/lu";
import Animation from './Animation.jsx'
const Hero = () => {
  const vantaRef = useVantaDots();
  const bool = true
  return (
    <>
      {/* <div className="w-full" ref={vantaRef}> */}
        {/* <div className='bg-black w-full h-full'> */}
        <div className="max-w-screen-xl mx-auto relative overflow-hidden">
          <div className='px-10 mt-[4rem]'>
            <div className='bg-[#ffffff0d] p-1 items-center gap-3 border rounded-full border-white/10 inline-flex'>
              <LuSparkles color='#21f39a' />
              <h3 className='text-[#21f39a] font-semibold text-lg capitalize tracking-[0.3rem]'>Crafting intelligent experiences</h3>
            </div>
            <div className=''>
              <h1 className='text-white/80 font-serif mt-6 text-[2.75rem] leading-tight sm:text-5xl md:text-[4.25rem] md:text-white'>Suyog {" "}
                <span className=" text-white/80 md:bg-gradient-to-r  md:from-[#1a8dff] md:via-[#21ffa3] md:to-[#6f5bff] md:bg-clip-text md:text-transparent">
                  Poudel
                </span>
              </h1>
              <div className='w-full md:w-[40%] mt-4'>
                <p className='text-[#cbd5e1] max-w-[90%]leading-relaxed backdrop-blur-[3px] text-slate-300 md:text-zinc-400  font-medium text-xl'>BCA student at Oxford College of Engineering and Management, blending Python engineering, interactive web interfaces, and data fluency to solve meaningful problems.</p>
              </div>
              <div className='px-6 py-2 mt-4 bg-[#ffffff0d] p-1 items-center gap-3 border rounded-full border-white/10 inline-flex'>
                <Animation />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>

  )
}

export default Hero

