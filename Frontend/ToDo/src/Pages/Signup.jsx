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

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"}/>

            <SubHeading  label={"Enter your information to create an account"}/>

            <InputBox label={"Name"} placeholder={"Nill Barman"} onChange={(e) => {
              setName(e.target.value)
            }}/>

            <InputBox onChange={e => setEmail(e.target.value)} label={"Email"} placeholder={"nill123@gmail.com"} />

            <PasswordInput onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"Nill@123"} />
            <div className='pt-4'>
              <Button label={"Sign Up"} onClick={async () => {
                await axios({
                  url: "http://localhost:3000/user/signup",
                  method: "POST",
                  data:{
                    name,
                    email,
                    password
                  }
                })
                navigate("/login")
              }}/>
            </div>
            <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/login"}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
