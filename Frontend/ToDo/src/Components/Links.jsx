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
        </div>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            {
                nameExists ? <button onClick={() => navigate("/dashboard")}>Dashboard</button> : <button onClick={() => {
                    navigate("/login");
                    toast.error("Please log in to access the dashboard.")
                }}>Dashboard</button>
            }
        </div>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            {
                nameExists ? <div>
                    <button 
                        onClick={() => navigate("/about")}
                    >Profile</button>
                </div> : <button onClick={() => navigate("/signup")}>Sign up</button>
            }
            
        </div>
    </>
  )
}

export default Links
