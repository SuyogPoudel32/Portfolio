import React from 'react'
import Vision from './Vision'
import Credential from './Credential'

const Visions = () => {
    const data = [
        {
            "title": "Mission",
            "description": "Craft human-centered solutions that unlock better decisions for developers, businesses, and end-users.",
        },
        {
            "title": "focus",
            "description": "Automation, interactive UIs, and clean datasets anchored by accessible design and reliable engineering.",
        },
    ]
    return (
    <div className='w-full mt-7 md:mt-0 md:w-[50%] flex flex-wrap gap-8 '>
        {data.map((elem)=> (<Credential title={elem.title} description = {elem.description} width={"100%"} key={elem.title}  />))}
    </div>
  )
}

export default Visions
