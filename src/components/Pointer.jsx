import React from 'react'

const Pointer = ({number,text,className}) => {
  return (
    <div className='border-r-2 border-[#4f585f33] pr-[30px] h-[100px] '>
        <h3  className='font-open text-[60px] font-extrabold text-[#1BBF00] leading-[68px]'> {number}</h3>
        <p  className={`font-open text-[28px] font-bold text-[#141135] leading-[40px]  ${className}`}>{text}</p>
    </div>
  )
}

export default Pointer