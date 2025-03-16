import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <div>
        <p className={`font-paprika font-regular text-lg text-four leading-[30px] ${className}`}>{text}</p>
    </div>
  )
}

export default SubHeading