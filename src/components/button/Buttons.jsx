import React from 'react'
import Button from './Button.jsx'
import { element } from 'three/tsl'
const buttons = () => {
    const btn_data = [
        {
            "id": 1,
            "text": "View Projects",
            "is_background":true,
            "is_icon": true
        },
        {
          "id": 2,
            "text": "Collaborrate",
            "is_background":false,
            "is_icon": false
        },
    ]
  return (
    <div className='max-w-screen-xl mx-auto text-white px-10 block md:flex gap-4'>
      {btn_data.map((elem) => (<Button text={elem.text} is_background={elem.is_background} is_icon={elem.is_icon} key={elem.id} />))}
    </div>
  )
}

export default buttons
