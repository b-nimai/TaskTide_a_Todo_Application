import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from './Toasts';

const TodoCard = ({title, description, complete, id, onData, createTime, createDate, updatedTime, updatedDate}) => {
  const sendDataToParent = ()=> {
    const data = true;
    onData(data)
  }
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-3 md:w-1/4 m-2 p-1 justify-around border shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-3xl bg-white bg-opacity-40 hover:bg-gray-100 hover:bg-opacity-60'>
      <div className='text-xl mt-1 font-semibold'>{title}</div>
      <div className='font-medium text-base'>{description}</div>

      <div className='flex text-xs font-semibold md:font-normal gap-1.5'>
        <div>
          Create Date: {createDate} <br />
          Create Time: {createTime}
        </div>
        <div>
          Complete Time: {updatedTime} <br />
          Complete Date: {updatedDate} 
        </div>
      </div>
      
      <div className='flex justify-around items-center gap-2'>
          <div className='w-2/4 flex justify-center items-center'>    
              {complete ? <IoMdCheckmarkCircleOutline /> : 
             <Button 
                label={"Complete"}
                onClick={async() => {
                  try {
                    await axios({
                      url: "http://localhost:3000/user/update",
                      method: "PUT",
                      headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        id
                      }
                    })
                    successToast("Task update success.")
                    sendDataToParent()
                  } catch (error) {
                    errorToast("Task update failed.")
                  }
                }}
              /> }
          </div>
          <div className='w-2/4 flex justify-center items-center'>
              <Button 
                label={"Delete"} 
                onClick={async() => {
                  try {
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
                    successToast("Task delete success.")
                    sendDataToParent()
                  } catch (error) {
                    errorToast("Task delete failed.")
                  }
                }}
              />
          </div>
      </div>

    </div>
  )
}

export default TodoCard
