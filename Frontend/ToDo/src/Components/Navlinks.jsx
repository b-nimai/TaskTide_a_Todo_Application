import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Links from './Links'


function Navlinks() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuBar = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <div className='flex flex-col-reverse gap-1'>
        <div className='hidden md:flex h-0 mb-8 flex-wrap text-black justify-around md:gap-7 gap-3 text-2xl cursor-pointer'>
            <Links />
        </div>

        {isOpen && (
            <div className='md:hidden z-30 text-2xl bg-white bg-opacity-70 rounded-xl flex flex-col flex-wrap items-center basis-full w-full'>
                <Links />
            </div>
        )}

        <div className='md:hidden mt-3.5 mx-12 text-3xl font-bold '>
            <button onClick={toggleMenuBar} className='transition-all duration-500'>{isOpen ? <RxCross2 />: <FiAlignJustify />}</button>
        </div>

        
    </div>
  )
}

export default Navlinks
