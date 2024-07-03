import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getSingleTask, updateTaskStatus } from '../actions/tasksAction';
import { toast } from 'sonner';
import {style} from '../style/style'

const SingleTask = () => {

    useEffect(()=>{
        (async function(){
            dispatch(getSingleTask(id));
        })();
    },[])

    const task = useSelector((state)=>state.task);

    const [isCompleted, setIsCompleted] = useState(task?.task?.data?.status);
    console.log(task?.task?.data?.status)
    const date = new Date(task?.task?.data?.createdAt);
    const newDate = date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'});

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleStatusChange=async()=>{
        const res = await dispatch(updateTaskStatus(id));
        if(res){
            setIsCompleted(prev => {
                return prev === undefined ? !task?.task?.data?.status : !prev 
            });
        }
    }

    const handleUpdate =()=>{

    }

    const handleDelete =async()=>{
        const res = await dispatch(deleteTask(id));
        if(res){
            toast.success('task deleted',style);
            navigate('/');
        }else{
            toast.error('task is not deleted',style)
        }
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-sm rounded-lg p-6 w-full max-w-2xl">
                <div className="text-xl mb-2 block truncate text-center text-black">{task?.task?.data?.title}</div>
                <p className="text-gray-500 text-sm mb-2 text-center">Assigned on {newDate}</p>
                <p className="mb-4 text-center">{task?.task?.data?.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-purple-700">Task is {isCompleted === undefined ? task?.task?.data?.status ? 'completed' : 'incomplete' : isCompleted ? 'completed' : 'incomplete'}</p>
                    <Button onClick={handleStatusChange} className="text-purple-700 bg-black">
                        {isCompleted === undefined ? task?.task?.data?.status ? <FaStar /> : <FaRegStar />  : isCompleted ? <FaStar /> : <FaRegStar /> }
                    </Button>
                </div>
                <div className="flex justify-between mt-6">
                    <Button onClick={handleUpdate} className="text-white w-1/2 mr-2">Update</Button>
                    <Button onClick={handleDelete} className="text-white w-1/2 ml-2">Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;
