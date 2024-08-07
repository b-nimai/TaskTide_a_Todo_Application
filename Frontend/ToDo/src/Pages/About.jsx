import React from 'react';
import Navbar from '../Components/Navbar';
import bg from '../assets/bg.jpg'
import Heading from '../Components/Heading';
import Button from '../Components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../Components/Toasts';


const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('email')
}

const About = () => {
  const navigate = useNavigate()
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "100vh"}}>
      <Navbar />
      <div className=' flex justify-center'>
        <div className='bg-white md:w-2/6 mt-20 pb-4 px-10 flex flex-col gap-3 justify-center items-center rounded-3xl bg-opacity-60'>
          <Heading label={"User Profile"}/>
          <div className='text-slate-500 text-base pt-1 px-4'>
            "The best way to predict the future is to create it." - Peter Drucker
          </div>
          <div className='font-semibold text-lg mt-0'>Email : <span className='font-bold'>{localStorage.getItem('email')}</span></div>
          <div className='font-semibold text-lg'>Name : <span className='font-bold'>{localStorage.getItem('name')}</span></div>
          <div>
            <Button 
              label={"Delete Profile"}
              onClick={async() => {
                const userConfirmation = confirm("Are you sure to delete your account ?")
                try {
                  if(!userConfirmation) {
                    throw new Error("User account deletion abort.");
                  }
                  await axios({
                    url: "https://tasktide-opal.vercel.app/user/deleteUser",
                    method: "DELETE",
                    headers:{
                      Authorization: "Bearer " + localStorage.getItem('token')
                    },
                    data:{
                      email: localStorage.getItem('email')
                    }
                  })
                  // clear localStorage
                  clearLocalStorage()
                  successToast("User account deleted successfully.")
                  navigate("/signup")
                } catch (error) {
                  errorToast("User account deletion failed.")
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
