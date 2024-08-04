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

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
        <Navbar />
        <div className="bg-slate-300 h-screen flex justify-center">
          <div className="flex flex-col justify-center">
              <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Log In"}/>
                <SubHeading  label={"Enter your credentials to access your account"}/>
                <InputBox onChange={e => setEmail(e.target.value)} label={"Email"} placeholder={"nill123@gmail.com"} />
                <PasswordInput onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"Nill@123"} />
                <div className='pt-4'>
                  <Button label={"Sign In"} onClick={ async() => {
                    const response = await axios({
                      url: "http://localhost:3000/user/login",
                      method: "POST",
                      data: {
                        email,
                        password
                      }
                    })
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("name", response.data.name)
                    navigate("/dashboard")
                  }}/>
                </div>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
              </div>
          </div>
        </div>
  </div>
  )
}

export default Login
