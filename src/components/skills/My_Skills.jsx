import React from 'react'
import Item from '../Item'
import Skills from './Skills'

const My_Skills = () => {
    return (
        <div id='skills' className='w-full text-white bg-[#0f172a]'>
            <div className=' max-w-screen-xl mx-auto px-10 py-2'>
                <div className='w-full mt-[5rem]'>
                    <div className='text-center'>
                        <Item text={"Skills"} />
                        <div className='mt-6 mx-auto md:w-[50%] text-2xl md:text-4xl leading-tight text-center' style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                            <h2>Engineering range anchored in real-world usage</h2>
                        </div>
                        <div className='mt-3 mx-auto md:w-[60%] text-xl font-semibold leading-tight text-center text-zinc-400'>
                            <p>Layers of programming, web, and data capabilities that adapt to new problem spaces quickly.</p>
                        </div>
                    </div>
                </div>
            <Skills />
            </div>

        </div>
    )
}

export default My_Skills
