
import { useState } from 'react'
import Button from './Button'

const Task = () => {
    const [isParticipated,setIsParticipated] = useState(false);
    const task = {
        title : "Hello",
        description : "HI",
        date : "1-2-3",
        status : true,
    }
    
  return (
    <div className="bg-white m-2 p-4" >
        <h1 className="text-xl">{task?.title}</h1>
        <p className="opacity-75 text-gray-500 text-sm">assigned on {task?.date}</p>
        <p>{task?.description}</p>
        <div className="flex justify-between items-center">
            <p className="text-purple-700">mission is {task?.status}</p>
            <div className='flex flex-col items-center'>
              <Button onClick={()=>setIsParticipated(prev=>!prev)} className={"text-purple-700 bg-black"}> {isParticipated ? <FaStar /> : <FaRegStar /> }</Button>
              <p>{`${isParticipated ? 'participated' : 'participate' }`}</p>
            </div>
        </div>
    </div>
  )
}
// onClick={()=>setIsParticipated(prev=>!prev)}

export default Task