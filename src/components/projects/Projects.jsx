import React from 'react'
import { useState } from "react";
import {projects} from "../../data/Projects"

const Projects = ({selectedCategory}) => {
    let [activeDetails, setactiveDetails] = useState(false);
    const filterProjects = projects.filter((elem)=>{
        return ( selectedCategory === "All" || elem.categories.includes(selectedCategory))
    })
    return (
        <div className="mt-14 grid gap-8 md:grid-cols-2 ">
            {/* main div */}
            {filterProjects.map((project)=>{
                return (

            <div className="group rounded-3xl border border-black/5 bg-[#0f172ab3] text-zinc-700 shadow-[0_40px_80px_-24px_rgba(26,141,255,0.38)] backdrop-blur-2xl overflow-hidden ">
                <div className="relative">
                                    <img className='rounded-3xl h-56 w-full object-cover transition duration-500 ease-out group-hover:scale-104'
                src={project.image} alt={project.imageAlt} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent transition duration-500 ease-out group-hover:scale-104"></div>
                <div class="absolute bottom-4 right-4 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">{project.year}</div>
                </div>
                <div className="mt-3 details p-5">
                    <h2 className="text-white text-2xl font-[500]">{project.title}</h2>
                    <p className="text-zinc-400 mt-3">{project.shortDescription} </p>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600 text-white/60 mt-5">
                        {project.tags.map((tag)=>{
                            return (

                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 font-semibold px-3 py-1 text-xm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag h-3.5 w-3.5 text-accent-green" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                            {tag}
                            </span>
                            )
                        })}
                    </div>

                    <div className='w-full flex justify-between mt-7'>
                        <button onClick={()=> window.open(project.githubUrl,"_blank")}
                        className='flex rounded-full border border-white/10 bg-white/5 px-3 py-1 items-center gap-2 text-zinc-400 font-semibold uppercase tracking-widest text-sm cursor-pointer transition duration-300 hover:border-[#10b98199] hover:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-4 w-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            Code
                            </button>

                            <button onClick={()=>{
                                setactiveDetails(project)
                                
                            }}
                            className='flex rounded-full border border-white/10 bg-white/5 px-3 py-1 items-center gap-2 text-zinc-400 uppercase font-semibold tracking-widest text-sm cursor-pointer transition duration-300 hover:border-[#10b98199] hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                                Details
                            </button>
                    </div>
                </div>
            </div>
                )
            })}
            {/* {activeDetails ? console.log(activeDetails) : console.log(" ")} */}
            {/* Dialogue box */}
            {activeDetails && (
                            
                            <div onClick={()=> setactiveDetails(false)}
                            className='fixed inset-0 z-50 flex items-center justify-center
                     bg-black/70 p-4 '>
                        <div onClick={(e)=>{
                            e.stopPropagation();
                        }}
                        className='bg-[#0f172af2] w-full md:max-w-xl relative rounded-3xl p-12'>
                            <div className="details mt-7">
                                <h1 className='text-xl md:text-3xl font-[400] text-white/90'>{activeDetails.title}</h1>
                                <p className='mt-4 text-sm text-white/70'>{activeDetails.description}</p>

                                <div className="tech_start">
                                    <h3 className='text-white/70 uppercase tracking-[0.35em] font-semibold text-sm mt-4 '>Tech Stack</h3>
                                    <div className='flex flex-wrap gap-3 mt-3'>
                                        {activeDetails.techStack.map((stack)=>{
                                            return (

                                        <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 font-semibold px-3 py-1 text-[12px]">
                                            {stack}
                                         </span>
                                            )
                                        })}
                                        
                                    </div>
                                </div>

                                {/* <div>
                                    <h3 className='text-white/60 tracking-[0.3em] font-semibold text-sm mt-3'>Highlights</h3>
                                            <ul className="list-disc pl-5 text-white/70 mt-2 h-[300px] overflow-y-auto">
                                            {activeDetails.achievements.map((el) =>{
                                                return <li> {el}</li>
                                            })}
                                            </ul>
                                </div> */}
                            </div>

                            <button onClick={()=> setactiveDetails(false)}
                            type="button" class=" absolute right-3 md:right-6 top-15 md:top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white cursor-pointer" aria-label="Close project details">✕</button>
                        </div>

            </div>
            )
            
            }



            
        </div>


    )





    
}
export default Projects;
