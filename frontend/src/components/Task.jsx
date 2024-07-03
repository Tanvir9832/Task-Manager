import { useState } from 'react';
import Button from './Button';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
    const [isParticipated, setIsParticipated] = useState(false);
    return (
        <div className="bg-white m-2 p-6 shadow-lg flex flex-col max-w-full sm:max-w-md overflow-hidden">
            <Link to="/task/124" className="text-xl mb-2 truncate">{task?.title}</Link>
            <p className="opacity-75 text-gray-500 text-sm mb-2 truncate">Assigned on {task?.date}</p>
            <p className="mb-4 overflow-hidden text-ellipsis whitespace-normal">{task?.description}</p>
            <div className="flex justify-between items-center mt-auto">
                <p className="text-purple-700">Task is {isParticipated ? 'completed' : 'incomplete'}</p>
                <div className="flex flex-col items-center">
                    <Button onClick={() => setIsParticipated(prev => !prev)} className="text-purple-700 bg-black">
                        {isParticipated ? <FaStar /> : <FaRegStar />}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Task;
