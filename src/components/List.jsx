import React from 'react'

const List = ({text, className}) => {
  return (
    <div className='bg-black-500'>
        <li className={`'text-fastly font-semibold text-lg list-none font-open 
        hover:text-secondary duration-700' ${className}`}> {text} </li>
    </div>
  )
}

export default List