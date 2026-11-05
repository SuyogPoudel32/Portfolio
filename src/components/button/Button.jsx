import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const button = ({ text = null, is_background = false, is_icon = false, onClick }) => {
  return (
    <div className='mt-5'>
      <button
        type="button"
        onClick={onClick}
        className={`py-3 cursor-pointer text-[1rem] font-semibold tracking-[0.36rem] uppercase rounded-full ${is_background
            ? "bg-gradient-to-r from-[#1a8dff] via-[#21ffa3] to-[#6f5bff] px-7 text-zinc-900 flex  items-center gap-3"

            : "bg-[#ffffff0d]  border rounded-full border-white/10 px-5 text-zinc-300"
          }`}
      >
        {text}
      {is_icon == true && <FiArrowDownRight  />}
      </button>
    </div>
    // bg-gradient-to-r from-[#1a8dff] via-[#21ffa3] to-[#6f5bff] bg-clip-text text-transparent
  )
}

export default button
