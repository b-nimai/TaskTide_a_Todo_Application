import React from 'react'
import { useNavigate } from 'react-router-dom'
import { successToast } from './Toasts'
import toast from 'react-hot-toast'

function Links() {
    const navigate = useNavigate()
    const nameExists = !!localStorage.getItem('name')
    const name = localStorage.getItem('name')
  return (
    <>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            {
                nameExists ? <button onClick={()=> {
                        localStorage.removeItem("name");
                        localStorage.removeItem("token");
                        successToast("Logout success.")
                        navigate("/login")
                    }}>
                        Log out
                    </button>
                     : 
                     <button onClick={()=>{
                        navigate("/login")
                     }}>
                        Log in
                    </button>
            }
            <div className='h-px w-12 mx-auto bg-slate-500 hidden md:group-hover:block transition-all duration-200'></div>
        </div>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            {
                nameExists ? <button onClick={() => navigate("/dashboard")}>Dashboard</button> : <button onClick={() => {
                    navigate("/login");
                    toast.error("Please log in to access the dashboard.")
                }}>Dashboard</button>
            }
            <div className='h-px w-24 mx-auto bg-slate-500 hidden md:group-hover:block transition-all duration-200'></div>
        </div>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            {
                nameExists ? <div className='text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 flex justify-center'>
                    <button 
                        onClick={() => navigate("/about")}
                        className='text-base'
                    >{name[0]}</button>
                </div> : <button onClick={() => navigate("/signup")}>Sign up</button>
            }
            {
                nameExists ? <div></div> : <div className='h-px w-14 mx-auto bg-slate-500 hidden md:group-hover:block transition-all duration-200'></div>
            }
        </div>
    </>
  )
}

export default Links
