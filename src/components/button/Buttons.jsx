import React from 'react'
import Button from './Button.jsx'
const buttons = () => {
    const btn_data = [
        {
            "id": 1,
            "text": "View Projects",
            "targetId": "projects",
            "is_background":true,
            "is_icon": true
        },
        {
          "id": 2,
            "text": "Collaborate",
            "targetId": "contact",
            "is_background":false,
            "is_icon": false
        },
    ]
  return (
    <div className='max-w-screen-xl mx-auto text-white px-5 sm:px-8 md:px-10 md:flex gap-4'>
      {btn_data.map((elem) => (
        <Button
          text={elem.text}
          is_background={elem.is_background}
          is_icon={elem.is_icon}
          onClick={() => document.getElementById(elem.targetId)?.scrollIntoView({ behavior: "smooth" })}
          key={elem.id}
        />
      ))}
    </div>
  )
}

export default buttons
