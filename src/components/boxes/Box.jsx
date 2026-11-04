import React from "react";

const Box = ({ elem }) => {
  return (
<div className="bg-[#12121C] p-5 rounded-2xl w-full md:w-1/6 mt-4">
  {/* TITLE */}
  <h1 className="text-xs uppercase font-bold tracking-[0.2rem] text-zinc-400 break-words whitespace-normal">
    {elem.title}
  </h1>


  {elem.title === "Tech Stack" ? (
    <div className="text-xl flex flex-col mt-3 gap-2">
      {elem.value.map((item, index) => (
        <div key={index} className="flex items-baseline gap-2">
          <span>{item}</span>


          {index !== elem.value.length - 1 && (
            <span className="rounded-full bg-white w-1 h-1" />
          )}
        </div>
      ))}
    </div>
  ) : (
    <p className="mt-2 text-xl text-white break-words">{elem.value}</p>
  )}
</div>
  );
};

export default Box;