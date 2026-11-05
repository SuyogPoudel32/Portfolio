import { LuSparkles } from "react-icons/lu";
import Animation from './Animation.jsx'
const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto mt-8 max-w-screen-xl px-5 pb-8 sm:mt-12 sm:px-8 md:mt-[4rem] md:px-10 md:pb-0">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-[#ffffff0d] p-1 sm:gap-3">
          <LuSparkles className="shrink-0 text-[#21f39a]" aria-hidden="true" />
          <h2 className="text-xs font-semibold capitalize tracking-[0.12em] text-[#21f39a] sm:text-sm sm:tracking-[0.2em] md:text-lg md:tracking-[0.3rem]">
            Crafting intelligent experiences
          </h2>
        </div>
        <div>
          <h1 className="mt-5 font-serif text-[2.75rem] leading-tight text-white/80 sm:mt-6 sm:text-5xl md:text-[4.25rem] md:text-white">
            Suyog{" "}
            <span className="text-white/80 md:bg-gradient-to-r md:from-[#1a8dff] md:via-[#21ffa3] md:to-[#6f5bff] md:bg-clip-text md:text-transparent">
              Poudel
            </span>
          </h1>
          <p className="mt-4 max-w-full text-base font-medium leading-relaxed text-slate-200 sm:max-w-[90%] sm:text-lg md:w-[40%] md:text-xl md:text-zinc-400 md:backdrop-blur-[3px]">
            BCA student at Oxford College of Engineering and Management, blending Python engineering, interactive web interfaces, and data fluency to solve meaningful problems.
          </p>
          <div className="mt-4 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-[#ffffff0d] px-4 py-2 sm:px-6 md:p-1">
            <Animation />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
