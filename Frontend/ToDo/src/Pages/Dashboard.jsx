import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import TodoCard from '../Components/TodoCard'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
      url: "http://localhost:3000/user/todos",
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
    <div>
        <Navbar />
        <div className="bg-slate-300 min-h-screen flex justify-cente items-center flex-col ">
          <div className='flex w-11/12 justify-around items-center p-5 m-5 bg-slate-50 rounded-md'>
            <div className='text-xl'>WellCome {userName}</div>
            <div>
              <Button label={"Create Task"} onClick={() => navigate("/create")}/>
            </div>
          </div>

          <div className='flex w-11/12 flex-wrap items-center bg-white rounded-lg justify-around text-center p-2 py-8 h-max'>
            {
              todos.map( todo => {
                return(
                  <TodoCard 
                    key={todo._id} 
                    id={todo._id} 
                    title={todo.title} 
                    description={todo.description} 
                    complete={todo.complete}
                    onData = {getDataFromChild}
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
