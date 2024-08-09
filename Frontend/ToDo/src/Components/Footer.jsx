import React from 'react'
import Links from './Links'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white bg-opacity-50 mt-5 flex justify-center items-center flex-col mb-0'>
        <div className='w-10/12 md:w-1/2 h-0 mt-8 flex justify-around items-center text-lg font-bold gap-2'>
            <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
                <button onClick={()=> navigate("/")}>Home</button>
                <div className='h-px w-12 mx-auto bg-slate-500 hidden md:group-hover:block transition-all duration-200'></div>
            </div>
            <Links />
        </div>
        <div className='mt-5 mb-2 text-lg'>
            <div>This product is Developed by <a href="https://nimaibarman.netlify.app/" target='blank' className='font-semibold text-black hover:text-gray-600'>Nimai Barman</a></div>
        </div>
    </div>
  )
}

export default Footer
