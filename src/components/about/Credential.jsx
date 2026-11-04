import React from 'react'

const Credential = ({ title, description, icon: Icon = false , width = "70%" }) => {
    return (
        <div className={`p-5 border border-white/10 bg-[#ffffff0d] w-full md:w-[${width}] rounded-2xl`}>
            <div className='flex gap-3'>
                {Icon && (
                    <div className='inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-base font-semibold shadow-lg'>
                        <Icon />
                    </div>
                )}


            <div className="w-[90%]">
                <h2 className='tracking-[0.15em] uppercase text-zinc-400 font-bold'>{title}</h2>
                <p className='text-zinc-300 font-semibold'>{description}</p>
            </div>
        </div>
            </div>

  )
}

export default Credential
