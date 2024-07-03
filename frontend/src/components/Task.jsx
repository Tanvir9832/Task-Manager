
import { useState } from 'react'
import Button from './Button'
import { FaRegStar, FaStar } from "react-icons/fa6";

const Task = ({task}) => {
    const [isParticipated,setIsParticipated] = useState(false);
    console.log(task)
  return (
    <div className="bg-white m-2 p-4 max-w-lg" >
        <h1 className="text-xl">{task?.title}</h1>
        <p className="opacity-75 text-gray-500 text-sm">Assigned on {task?.date}</p>
        <p>{task?.description}</p>
        <div className="flex justify-between items-center">
            <p className="text-purple-700">Task is {`${isParticipated ? 'completed' : 'incomplete' }`}</p>
            <div className='flex flex-col items-center'>
              <Button onClick={()=>setIsParticipated(prev=>!prev)} className={"text-purple-700 bg-black"}> {isParticipated ? <FaStar /> : <FaRegStar /> }</Button>
            </div>
        </div>
    </div>
  )
}
// onClick={()=>setIsParticipated(prev=>!prev)}

export default Task