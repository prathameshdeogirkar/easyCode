import React from 'react'
import BTNBG from "../assets/btnbg.png"

const Appbtn = ({title="click me",onClick}) => {
  return (
    <div className='relative h-10 w-[50%] overflow-hidden flex justify-center items-center rounded-md  shadow-md shadow-black hover:shadow-lg hover:shadow-gray-950 '>  
         <img src={BTNBG}/>
         <button className='absolute top-0 left-0 text-center h-full w-full font-bold text-2xl' onClick={()=>onClick()}>{title}</button>
    </div>
  )
}

export default Appbtn