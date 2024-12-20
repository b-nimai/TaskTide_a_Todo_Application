import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import Button2 from '../Components/Button2'
import ButtonWarning from '../Components/ButtonWarning'
import PasswordInput from '../Components/PasswordInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import bg from './../assets/bg.jpg'
import {successToast, errorToast} from '../Components/Toasts'
import Footer from '../Components/Footer'

const Signup = () => {

  const otpGenerationHandler = async() => {
    try {
      const response = await axios({
        url: "https://tasktide-opal.vercel.app/mail/sendOtp",
        method: "POST",
        data: {
          email
        }
      })
      setGenerated(true);
      successToast("Check your email for OTP.")
    } catch (error) {
      errorToast("OTP generation failed, try again.")
    }
  }

  const validateOtpHandler = async () => {
    if(!generated) {
      errorToast("Please, Generate OTP first then validate.")
      return;
    }
    try {
      const response = await axios({
        url: "https://tasktide-opal.vercel.app/mail/verifyOtp",
        method: "POST",
        data: {
          email,
          otp
        }
      })
      setValid(true);
      successToast("OTP validation success")
    } catch (error) {
      errorToast("Invalid OTP, try again")
    }
  }

  const handleSignup = async () => {
    if(!valid){
      errorToast("Please, validate OTP then try again");
      return;
    }
    try {
      const response = await axios.post("https://tasktide-opal.vercel.app/user/signup", {
        name,
        email,
        password,
      });
      
      const message = response.data.message;
      successToast('User signed up successfully!')
      navigate("/login");
    } catch (error) {
      errorToast(error.response?.data?.message)
    }
  };

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [generated, setGenerated] = useState(false)
  const [valid, setValid] = useState(false)
  const navigate = useNavigate()
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 mt-12 mb-12 bg-opacity-60">
            
            <Heading label={"Sign Up"}/>

            <SubHeading  label={"Enter your information to create an account"}/>

            <InputBox label={"Name"} placeholder={"Example: Nill Barman"} onChange={(e) => {
              setName(e.target.value)
            }}/>

            <InputBox onChange={e => {
              setEmail(e.target.value);
              setValid(false);
            }} label={"Email"} placeholder={"Exmaple: nill123@gmail.com"} />

            <div className='pt-4 px-16'>
              <Button2 label={"Generate OTP"} onClick={otpGenerationHandler}/>
            </div>

            <div className='flex gap-5'>
              <InputBox label={"Enter OTP"} placeholder={"Enter 6 digit OTP"} onChange={(e) => setOtp(e.target.value)}/>

              <div className='pt-9'>
                <Button2 label={"Validate"} onClick={validateOtpHandler}/>
              </div>
            </div>

            <PasswordInput onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"Length shoud be greate than 7"} />
            <div className='pt-4'>
              <Button label={"Sign Up"} onClick={handleSignup}/>
            </div>
            <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/login"}/>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
