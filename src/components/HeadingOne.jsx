import React from 'react'

const HeadingOne = ({text,classname}) => {
  return (
    <div>
        <h2 className={`font-open text-5xl font-bold text-thirdly  ${classname}`}>{text}</h2>
    </div>
  )
}

export default HeadingOne