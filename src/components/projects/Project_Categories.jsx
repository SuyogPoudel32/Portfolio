import React from 'react'
import { projectCategories } from '../../data/Projects'
import Project_Category from "./Project_Category"
const Project_Categories = ({selectedCategory,setselectedCategory}) => {
  return (
    <div className='flex flex-wrap gap-3 sm:gap-4 justify-center mt-7 px-3'>
      {projectCategories.map((elem) => <Project_Category key={elem} cate = {elem} setselectedCategory={setselectedCategory} selectedCategory={selectedCategory} />)}
    </div>
  )
}

export default Project_Categories
