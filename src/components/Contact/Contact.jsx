import React, { useState } from 'react'
import Item from "../Item"
import { socialLinks } from "../../data/SocialLinks"
import emailjs from "@emailjs/browser"
const Contact = () => {
  const [Loading , setLoading] = useState(false);
  const [Status,setStatus] = useState("")
  const [formData, setFormData] = useState({
    "name": "",
    "email": "",
    "message": ""
  })

async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_d3bk1tm",
        "template_pwhmkbk",
        formData,
        {
          publicKey: "Pj4dnwLhJghwfT2eA",
        }
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  
  function handleChange(e){
    const {name , value} = e.target
    setFormData((prev)=>({
      ...prev,
      [name]: value
    }))
  }
  

  return (
    <div id='contact' className='w-full text-white bg-[#0f172a]'>
      <div className='max-w-screen-xl mx-auto px-10 py-2'>
        <div className='mt-14 mb-8'>
          <Item text={"Contact"} />
          <div className="mx-auto text-center mt-5 max-w-3xl" style={{ fontFamily: "sans-serif" }}>
            <h2 className='font-semibold captalize text-2xl md:text-5xl text-white/80 leading-tight'>Let’s build the next standout experience</h2>
            <p className='mt-4 text-white/70 text-lg'>If you need someone who blends strategic thinking, meticulous engineering, and love for details, let’s talk.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 mt-5">

            {/* form design 0f172a99*/}
            <div className=' bg-white/5 border-white/5 backdrop-blur-2xl rounded-2xl p-6'>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label className='tracking-[0.35em] text-white/60 uppercase font-semibold text-xs'> Name </label>
                  <input value={formData.name}
                  name='name' onChange={handleChange} placeholder="Your Name" type="text" className="mt-4 w-full rounded-2xl border border-white/10 bg-[#ffffff0d] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#3b82f6] focus:outline-none" />
                </div>

                <div className="flex flex-col mt-5">
                  <label className='tracking-[0.35em] text-white/60 uppercase font-semibold text-xs'> Email </label>
                  <input value={formData.email} onChange={handleChange} name='email' placeholder="Your Email" type="text" className="mt-4 w-full rounded-2xl border border-white/10 bg-[#ffffff0d] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#3b82f6] focus:outline-none" />
                </div>

                <div className="flex flex-col mt-5">
                  <label className='tracking-[0.35em] text-white/60 uppercase font-semibold text-xs'> Email </label>
                  <textarea value={formData.message}
                  onChange={handleChange} name='message' placeholder="Your Message" rows={7} className="mt-4 w-full rounded-2xl border border-white/10 bg-[#ffffff0d] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#3b82f6] focus:outline-none" />
                </div>

                <div>
                  <button type="submit" disabled={Loading} className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 text-white font-semibold rounded-full flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    {Loading ? "Sending..." : "Submit"}
                    </button>

                    {Status && (
                      <p role="status" className='mt-3 text-sm text-white'> {Status} </p>
                    )}

                </div>

              </form>
            </div>



            <div>

              <div className='bg-white/5 border-white/5 backdrop-blur-2xl rounded-2xl p-8'>
                <h3 className="font-semibold text-white/80 text-xl" style={{ fontFamily: "sans-serif" }}> Direct lines </h3>
                <p className="mt-4 text-white/70">Prefer a quick chat? Drop a note on email or connect via LinkedIn and GitHub.</p>

                <div>



                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <div
                        key={link.platform}
                        className="mt-5 w-full rounded-2xl border border-white/10 bg-[#ffffff0d] px-4 py-1"
                      >
                        <a
                          href={link.url ?? undefined}
                          target={link.url?.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="flex items-center gap-4"
                        >
                          <Icon className="h-5 w-5 shrink-0 text-zinc-300" />

                          <div className="flex flex-col">
                            <span className="font-semibold uppercase tracking-[0.3em] text-zinc-300">
                              {link.platform}
                            </span>

                            <span className="font-semibold text-white/70">
                              {link.handle ?? "Not Found " }
                            </span>
                          </div>
                        </a>
                      </div>
                    );
                  })}


                </div>


              </div>


                <div className='mt-4 bg-white/5 border-white/5 backdrop-blur-2xl rounded-2xl p-8'>
                      <div>
                        <h3 className=" text-white/80 text-xl" style={{ fontFamily: "sans-serif" }}> Schedule a Call</h3>
                        <p className='mt-4 text-white/70'>Have a project with clear timelines? Let <sup>'</sup>s schedule a video call to align on scope , roadmaps and next steps</p>
                      </div>
                
                </div>






            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
