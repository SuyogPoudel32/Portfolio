import React from 'react'

const Project_Category = ({cate,selectedCategory,setselectedCategory}) => {
  return (
    <div>
      <button onClick={()=> setselectedCategory(cate)}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition border-black/10  hover:border-accent-blue/60  border-white/10 bg-white/5 text-white/60 hover:text-white cursor-pointer ${selectedCategory === cate ? "bg-blue-500 text-white": "bg-zinc-800 text-zinc-300"}`}>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers h-3.5 w-3.5" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
        {cate}</button>
    </div>
  )
}

export default Project_Category
