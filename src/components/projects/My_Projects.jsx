import React, { useState } from 'react'
import Item from '../Item'
import Project_Categories from './Project_Categories'
import Projects from './Projects'

const My_Projects = () => {
    const [selectedCategory, setselectedCategory] = useState("All")
  return (

      <div id='projects' className='w-full text-white bg-[#0f172a]'>
                  <div className='max-w-screen-xl mx-auto px-10 py-2'>
                      <div className='w-full mt-[5rem]'>
                          <div className='text-center'>
                              <Item text={"Projects"} />
                              <div className='mt-6 mx-auto md:w-[50%] text-2xl md:text-4xl leading-tight text-center' style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                                  <h2>Building products that blend engineering and storytelling</h2>
                              </div>
                              <div className='mt-3 mx-auto md:w-[60%] text-xl font-semibold leading-tight text-center text-zinc-400'>
                                  <p>Every project is a playground for polished experiences, clean data, and maintainable architecture.</p>
                              </div>
                          </div>
                            
                                <Project_Categories selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
                                <Projects selectedCategory={selectedCategory} />
                            
                        
                          
                      </div>
                  
                  </div>
      
              </div>
    
  )
}

export default My_Projects
