import React from 'react'
import Box from './Box'

const Boxes = () => {
 const stats =  [
    {
      title: "Projects Delivered",
      value: "0",
    },
    {
      title: "Tech Stack",
      value: ["Web", "Data Analytics"],
    },
    {
      title: "Scholarship",
      value: "Pokhara University",
    },
  ]
  return (
    <div className='max-w-screen-xl px-10 py-2 mx-auto block md:flex mt-5 text-white gap-2'>
      {stats.map((elem) => <Box elem = {elem} key={elem.title} />)}
    </div>
  )
}

export default Boxes
