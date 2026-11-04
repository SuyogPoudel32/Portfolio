import React from 'react'
import Credentials from './Credentials'
import DeveloperOverview from './DeveloperOverview'
import Visions from './Visions'
import Item from "../Item"


const Introduction = () => {
  return (
    <div className='w-full'>
    <div className='w-full text-center items-center mt-[5rem] flex-col'>
      <Item text={"About"} />
      <div className='mt-8  w-[100%] '>
        <h3 className='leading-9 text-[1.5rem] md:text-[2.5rem] w-full text-zinc-100 tracking-[0.1em]'>Building polished, data-informed software experiences</h3>
        <h3 className='text-zinc-400 text-[1rem] mt-5  tracking-[0.1em]'>I thrive at the intersection of Python engineering, modern web development, and helping data tell better stories.</h3>
      </div>
      </div>

      <Credentials />
      <div className='block md:flex w-full gap-5 items-center'>
      <DeveloperOverview />
        <Visions />
      </div>
    </div>
  )
}

export default Introduction
