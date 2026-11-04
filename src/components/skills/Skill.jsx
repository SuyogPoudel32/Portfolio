import React from 'react'

const Skill = ({skills}) => {

  return (
 <div className='mt-8 w-[100%] md:w-[48%] bg-white/5 border-white/5 backdrop-blur-2xl rounded-2xl p-7'>
            <div className='flex items-center justify-between'>
                <div className="left">
                    <h2 className='tracking-[0.2em] uppercase font-bold text-zinc-500'> {skills.id} </h2>
                    <p className='font-semibold text-zinc-400'>{skills.focus}</p>
                </div>
                <div className="right">
                    <span class="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-base font-semibold shadow-lg"></span>
                </div>
            </div>

            {skills.items.map(elem =>{
                
                return <div className='border border-white/10 bg-[#ffffff0d] w-full  mt-4 rounded-xl'>
                <div className=' p-4 '>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img className='h-8 w-8' src={elem.logo} alt="" />
                            <h3 className='font-semibold'>{elem.name}</h3>
                        </div>
                        <div>
                            <span className='text-[#1FE291] text-sm'>{elem.level}%</span>
                        </div>

                    </div>

                    <div>
                        <p className='text-zinc-400 font-semibold mt-2'>{elem.description}</p>
                    </div>
                    <div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                            class="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style={{width: elem.level + "%"}}>

                            </div>
                    </div>
                </div>
            </div>
            })}
            

            
        
        </div>
        
  )
}

export default Skill
