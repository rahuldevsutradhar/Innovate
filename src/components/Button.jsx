import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
      <button className={` px-[28px] py-[14px] bg-secondary rounded-[100px] text-white font-open text-lg font-semibold
        border border-transparent hover:bg-transparent hover:text-white hover:border-secondary ${className}` }>
         {text}
        </button>
    </div>
  )
}

export default Button