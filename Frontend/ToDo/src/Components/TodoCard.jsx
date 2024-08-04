import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TodoCard = ({title, description, complete, id, onData}) => {
  const sendDataToParent = ()=> {
    const data = true;
    onData(data)
  }
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-3 md:w-1/4 m-4 p-2 justify-around border shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-3xl bg-white hover:bg-gray-100'>
      <div className='text-xl mt-1 font-semibold'>{title}</div>
      <div className='font-medium text-base'>{description}</div>
      <div className='flex justify-around items-center gap-2'>
        <div className='w-2/4 flex justify-center items-center'>    
            {complete ? <IoMdCheckmarkCircleOutline /> : 
           <Button 
              label={"Complete"}
              onClick={async() => {
                await axios({
                  url: "http://localhost:3000/user/update",
                  method: "PUT",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    id
                  }
                })
                sendDataToParent()
              }}
            /> }
        </div>
        <div className='w-2/4 flex justify-center items-center'>
            <Button 
              label={"Delete"} 
              onClick={async() => {
                await axios({
                  url: "http://localhost:3000/user/delete",
                  method: "DELETE",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                  },
                  data:{
                    id
                  }
                })
                sendDataToParent()
              }}
            />
        </div>
      </div>
    </div>
  )
}

export default TodoCard
