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

const Login = () => {

  const loginHandler = async() => {
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
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
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
        <Navbar />
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
              <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 mt-20 bg-opacity-60">
                <Heading label={"Log In"}/>
                <SubHeading  label={"Enter your credentials to access your account"}/>
                <InputBox onChange={e => setEmail(e.target.value)} label={"Email"} placeholder={"nill123@gmail.com"} />
                <PasswordInput onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"Nill@123"} />
                <div className='pt-4'>
                  <Button label={"Log In"} onClick={loginHandler}/>
                </div>
                <ButtonWarning label={"Forgot Password?"} buttonText={"Reset"} to={"/resetPassword"}/>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
              </div>
          </div>
        </div>
  </div>
  )
}

export default Login
