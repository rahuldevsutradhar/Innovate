import React from 'react'

const List = ({ text, className }) => {
  return (
    <li className={`text-fastly font-semibold text-lg list-none font-open hover:text-secondary duration-700 ${className}`}>
      {text}
    </li>
  )
}

export default List;
