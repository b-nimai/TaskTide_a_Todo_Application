import React from 'react'
import Navlinks from './Navlinks'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='text-black flex justify-between items-center md:justify-around h-16 flex-wrap md:px-0 px-2 bg-red-50'>
      <div className='ml-5 md:mx-0 font-normal text-3xl md:text-4xl flex items-center'>
        <button onClick={() => navigate("/")}><img src={logo} className='h-16 rounded-full'/></button>
        <p>TaskTide</p>
        
      </div>
      <Navlinks />
    </div>
  )
}

export default Navbar

