import React from 'react'

const Button2 = ({label, onClick}) => {
  return (
    <button onClick={onClick} type="button" className=" text-white bg-gray-800 
    hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
    rounded-lg text-sm px-5 py-2 me-2">
        {label}
    </button>
  )
}

export default Button2
