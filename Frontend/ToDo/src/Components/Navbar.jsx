import React from 'react'
import Navlinks from './Navlinks'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='text-black flex justify-between  md:items-center md:justify-around h-16 flex-wrap md:px-0 px-2 bg-red-50 bg-opacity-80'>
      <div className='ml-5 md:mx-0 font-normal text-3xl md:text-4xl flex md:items-center'>
        <button onClick={() => navigate("/")} className='flex items-start'><img src={logo} className='h-16'/></button>
        <div className='flex items-start mt-3 md:mt-0 md:items-center'>TaskTide</div>
        
      </div>
      <Navlinks />
    </div>
  )
}

export default Navbar

