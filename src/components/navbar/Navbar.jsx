import React, { useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { AnimatePresence } from "framer-motion";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sections = ["Home", "About", "Skills", "Projects", "Contact"];

  const navigateToSection = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <div className='relative bg-black w-full text-white'>
      <div className='max-w-screen-xl mx-auto px-4 py-4 sm:px-10'>
        <div className='w-full flex items-center gap-4 sm:gap-10 justify-between'>
          <div className='w-auto lg:w-[25%] flex items-center gap-3 tracking-[0.2em] '>
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-base font-semibold shadow-lg">
              SP
            </span>
            <span className='text-sm font-medium uppercase '>Suyog Poudel</span>
          </div>

          <nav className="w-[75%] hidden lg:flex justify-between gap-7 text-white/70 ">
            <div className='w-[90%] flex gap-7'>
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  onClick={() => navigateToSection(item)}
                  key={item}
                  className="text-zinc-400 group cursor-pointer relative inline-flex items-center gap-2 transition duration-400 hover:text-white font-medium"
                >
                  <span>{item}</span>

                  <span className="absolute left-0 -bottom-2 h-[2px] w-full origin-left scale-x-0 
      bg-gradient-to-r from-indigo-500 to-pink-500 
      transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
                </button>
              ))}
            </div>

            <div>
              <a className='group relative flex gap-3 items-center transition duration-400 hover:text-white font-medium' href="#">
                <FaDownload />
                <span>Resume</span>
                <span className="absolute left-0 -bottom-2 h-[2px] w-full origin-left scale-x-0 
                bg-gradient-to-r from-indigo-500 to-pink-500 
                transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
              </a>
            </div>
          </nav>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className='lg:hidden'
          >
            <TiThMenu size={"20px"} />
          </button>
        </div>
      </div>

           <AnimatePresence>

        {open && (

          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl  flex  items-center  justify-center
            "
          >

            {/* CROSS ICON */}
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-4xl cursor-pointer"
            >
              <GiCrossedBones />
            </button>

            {/* NAV LINKS */}
            <nav className="flex flex-col items-center gap-8">

              {sections.map((elem) => (

                <button
                  key={elem}
                  onClick={() => navigateToSection(elem)}
                  className="text-zinc-400 group relative text-3xl font-medium transition-all duration-300 hover:text-white
                  "
                >
                  {elem}

                   <span className=" absolute left-0 -bottom-2 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r  from-indigo-500  to-pink-500 transition-transform duration-300 ease-out group-hover:scale-x-100
          "
        ></span>

                </button>

              ))}

            </nav>

          </motion.div>

        )}

      </AnimatePresence>
    </div>


  )
}

export default Navbar
