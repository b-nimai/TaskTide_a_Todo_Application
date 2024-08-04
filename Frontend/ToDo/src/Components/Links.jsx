import React from 'react'
import { useNavigate } from 'react-router-dom'

function Links() {
    const navigate = useNavigate()
    const nameExists = !!localStorage.getItem('name')
  return (
    <>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            {
                nameExists ? <button onClick={()=> {
                        localStorage.removeItem("name");
                        localStorage.removeItem("token");
                        navigate("/login")
                    }}>
                        Log Out
                    </button>
                     : 
                     <button onClick={()=>{
                        navigate("/login")
                     }}>
                        Sign in
                    </button>
            }
            <div className='h-px w-16 mx-auto bg-slate-500 hidden md:group-hover:block transition-all duration-200'></div>
        </div>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            {
                nameExists ? <button onClick={() => navigate("/dashboard")}>Dashboard</button> : <button onClick={() => navigate("/login")}>Dashboard</button>
            }
            <div className='h-px w-24 mx-auto bg-slate-500 hidden md:group-hover:block transition-all duration-200'></div>
        </div>
        <div className='p-1 flex flex-col gap-3 hover:text-slate-500 transition-all duration-200 relative group'>
            <button onClick={() => navigate("/about")}>About</button>
            <div className='h-px w-14 mx-auto bg-slate-500 hidden md:group-hover:block transition-all duration-200'></div>
        </div>
    </>
  )
}

export default Links
