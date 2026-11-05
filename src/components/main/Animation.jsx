import { TypeAnimation } from 'react-type-animation';
const Animation = () => {
  return (
    <div className="flex min-w-0 items-center gap-2 md:gap-3">
      <p className="flex items-center text-xs font-bold md:text-sm">
        <span className="shrink-0 text-white/60">I am </span>{" "}
        <TypeAnimation
          sequence={[
            'Web Developer',
            1000,
            'Data Scientist',
            1000,
            'Python Developer',
            1000,
            'Tea lover',
            1000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="inline-block w-[8.5rem] whitespace-nowrap text-left text-[#1EC982] md:w-auto"
        />
      </p>
      <hr className="h-4 w-[2px] shrink-0 border-0 bg-white/20" />
      <span className="mr-1 inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#21f39a] md:mr-3" />
    </div>
  )
}

export default Animation
