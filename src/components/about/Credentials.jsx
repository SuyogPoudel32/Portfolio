import React from 'react'
import Credential from "./Credential";
import { BsMortarboardFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";

const Credentials = () => {
    const data = [
        {
            "title": "Education",
            "description": "Bachelor of Computer Application (BCA), Oxford College of Engineering and Management, Pokhara University",
            "icon": BsMortarboardFill
        },
        {
            "title": "Based in",
            "description": "Nepal • Collaborating with teams globally",
            "icon": FaLocationDot
        },
                {
            "title": "Scholarship",
            "description": "Pokhara University Scholarship Award recipient",
            "icon": FaMedal
        },
    ]
    return (
        <div className="w-full block md:flex justify-between mt-[4rem]">
            <div className='w-full md:w-[300px] h-[400px] relative'>
        <img className='w-full h-full object-cover rounded-2xl' src="src/assets/profile.png" alt="" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#050510b3] via-transparent to-transparent"></div>
      </div>
      <div className='flex flex-col w-full md:w-[70%] gap-7 items-end mt-7 md:mt-0'>
      {data.map((elem)=> <Credential title={elem.title} description = {elem.description} icon = {elem.icon} key={elem.title} />)}
      </div>
        </div>
    )
}

export default Credentials
