import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import TodoCard from '../Components/TodoCard'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import bg from '../assets/bg.jpg'

const Dashboard = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState([])
  const [userName, setUserName] = useState("")
  const [refresh, setRefresh] = useState(false)
  const getDataFromChild = () => {
    setRefresh(refresh => !refresh)
  }
  useEffect(() => {
    axios({
      url: "https://tasktide-opal.vercel.app/user/todos",
      method: "GET",
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response => {
      setTodos(response.data.todos);
      setUserName(localStorage.getItem("name"))
    })
  },[refresh])
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
        <Navbar />
        <div className="min-h-screen flex justify-cente items-center flex-col ">
          <div className='flex w-11/12 justify-around items-center p-5 m-5 bg-slate-50 rounded-md bg-opacity-60'>
            <div className='text-xl'>WellCome {userName}</div>
            <div>
              <Button label={"Create Task"} onClick={() => navigate("/create")}/>
            </div>
          </div>

          <div className='flex w-11/12 flex-wrap items-center bg-white rounded-lg justify-around text-center p-2 py-8 h-max mb-5 bg-opacity-60'>
            {
              todos.length == 0 ? <div className='text-lg font-semibold'>
                  No Todo found ! <br /> <br />
                  Success is a journey that begins with thoughtful planning, <br />
                  is fueled by strategic execution, and culminates in the realization of your goals. <br /> <br />
                  So, create a plan, set your todos, and take one step closer to success.
                </div> :
              todos.map( todo => {
                return(
                  <TodoCard 
                    key={todo._id} 
                    id={todo._id} 
                    title={todo.title} 
                    description={todo.description} 
                    complete={todo.complete}
                    onData = {getDataFromChild}
                    createDate={todo.createdDate}
                    createTime={todo.createdTime}
                    updatedDate={todo.updatedDate}
                    updatedTime={todo.updatedTime}
                  />
                )
              })
            }
          </div>
          
        </div>
    </div>
  )
}

export default Dashboard
