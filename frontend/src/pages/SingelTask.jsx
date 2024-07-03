import { useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const SingleTask = () => {
    const task = {};
    const [isParticipated, setIsParticipated] = useState(task?.isParticipated || false);

    const handleUpdate = () => {
        const updatedTask = { ...task, isParticipated };
    };
    const onDelete=()=>{
        
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <Link to="/" className="text-xl mb-2 block truncate text-center text-black">{task?.title}</Link>
                <p className="text-gray-500 text-sm mb-2 text-center">Assigned on {task?.date}</p>
                <p className="mb-4 text-center">{task?.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-purple-700">Task is {isParticipated ? 'completed' : 'incomplete'}</p>
                    <Button onClick={() => setIsParticipated(prev => !prev)} className="text-purple-700 bg-black">
                        {isParticipated ? <FaStar /> : <FaRegStar />}
                    </Button>
                </div>
                <div className="flex justify-between mt-6">
                    <Button onClick={handleUpdate} className="text-white w-1/2 mr-2">Update</Button>
                    <Button onClick={() => onDelete(task)} className="bg-red-500 text-white w-1/2 ml-2">Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;
