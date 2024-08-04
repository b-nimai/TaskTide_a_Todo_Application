import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import TextareaBox from '../Components/TextareaBox'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateTodo = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  return (
    <div>
      <Navbar />
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Create Task"} />
            <SubHeading label={"Plan early, execute daily, success will follow you naturally."} />
            <TextareaBox onChange={(e) => setTitle(e.target.value)} label={"Title"} row={2} placeholder={"Title goes Here"} />
            <TextareaBox onChange={(e) => setDescription(e.target.value)} label={"Description of Task"} placeholder={"Write Description of the task"} row={4}/>
            <Button 
              label={"Create Task"}
              onClick={async()=>{
                await axios({
                  url: "http://localhost:3000/user/create",
                  method: "POST",
                  headers:{
                    Authorization: "Bearer " + localStorage.getItem("token")
                  },
                  data:{
                    title,
                    description
                  }
                })
                navigate("/dashboard")
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTodo
