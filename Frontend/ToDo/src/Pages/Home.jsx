import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import bg from '../assets/bg.jpg'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div 
      style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}
      className="flex flex-col"
    >
      <Navbar />
      <HeroSection />
      <div className='text-w text-rose-600 p-5 mt-9 mx-7 mb-0 font-semibold bg-white rounded-3xl bg-opacity-60'>
        <div className="py-2 text-black font-bold flex flex-col gap-2 md:hidden items-center justify-center">
          <div>Kickstart Your Daily Planning with us</div>
          <Link to="/login" className="pointer underline pl-1 cursor-pointer">
            Login Here
          </Link>
          <Link to="/signup" className="pointer underline pl-1 cursor-pointer">
            Signup Here
          </Link>
        </div>
        <h1 className="text-2xl mt-5 md:mt-0 md:text-3xl font-semibold mb-2">About TaskTide</h1>
        <p className="md:text-lg mb-4 text-rose-800">
          Welcome to TaskTide, your ultimate task management companion! Our application is designed to
          help you stay organized, productive, and on top of your daily tasks with ease. Whether you're
          managing personal errands, professional projects, or simply planning your day, TaskTide is here
          to assist you every step of the way.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="md:text-lg mb-4 text-rose-800">
          At TaskTide, we believe that effective task management is the key to success and peace of mind.
          Our mission is to provide a simple, intuitive, and powerful tool that helps you streamline your tasks
          and achieve your goals effortlessly.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Home

