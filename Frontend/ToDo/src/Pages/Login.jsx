import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import ButtonWarning from '../Components/ButtonWarning'
import PasswordInput from '../Components/PasswordInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import bg from './../assets/bg.jpg'
import { errorToast, successToast } from '../Components/Toasts'
import Footer from '../Components/Footer'

const Login = () => {

  const loginHandler = async() => {
    try {
      const response = await axios.post("https://tasktide-opal.vercel.app/user/login", {
        email,
        password
      })
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("name", response.data.name)
      localStorage.setItem("email", response.data.email)
      successToast("Login Successs")
      navigate("/dashboard")
    } catch (error) {
      errorToast(error.response?.data?.message)
    }
  }

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div 
      style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}
    >
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center">
              <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 mt-20 bg-opacity-60">
                <Heading label={"Log In"}/>
                <SubHeading  label={"Enter your credentials to access your account"}/>
                <InputBox onChange={e => setEmail(e.target.value)} label={"Email"} placeholder={"Example: nill123@gmail.com"} />
                <PasswordInput onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"Example: Nill@123"} />
                <div className='pt-4'>
                  <Button label={"Log In"} onClick={loginHandler}/>
                </div>
                <ButtonWarning label={"Forgot Password?"} buttonText={"Reset"} to={"/resetPassword"}/>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
              </div>
          </div>
        </div>
        <div className='md:mt-28 mt-48'>
          <Footer />
        </div>
  </div>
  )
}

export default Login
