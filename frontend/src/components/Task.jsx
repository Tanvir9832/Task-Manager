import { useState } from 'react';
import Button from './Button';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../actions/tasksAction';

const Task = ({ task }) => {
    const [isCompleted, setIsCompleted] = useState(task?.status);

    const date = new Date(task?.createdAt);
    const newDate = date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'});
    
    const dispatch = useDispatch();
    const handleStatusChange=async()=>{
        const res = await dispatch(updateTaskStatus(task?._id));
        if(res){
            setIsCompleted(prev => !prev);
        }
        
    }
    return (
        <div className="bg-white m-2 p-6 shadow-lg flex flex-col max-w-full sm:max-w-md overflow-hidden">
            <Link to={`/task/${task?._id}`} className="text-xl mb-2 truncate">{task?.title}</Link>
            <p className="opacity-75 text-gray-500 text-sm mb-2 truncate">Assigned on {newDate}</p>
            <Link to={`/task/${task?._id}`} className="mb-4 overflow-hidden text-ellipsis whitespace-normal">{task?.description} </Link>
            <div className="flex justify-between items-center mt-auto">
                <p className="text-purple-700">Task is {isCompleted === undefined ? task?.status ? 'completed' : 'incomplete' : isCompleted ? 'completed' : 'incomplete'}</p>
                <div className="flex flex-col items-center">
                    <Button onClick={handleStatusChange} className="text-purple-700 bg-black">
                        {isCompleted === undefined ? task?.status ? <FaStar /> : <FaRegStar />  : isCompleted ? <FaStar /> : <FaRegStar /> }
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Task;
