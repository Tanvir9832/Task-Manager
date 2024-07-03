import { useDispatch } from "react-redux";
import {toast} from 'sonner'
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validation from '../utils/validation';
import { addTask } from "../actions/tasksAction";
import { style } from "../style/style";



const AddTask = () => {
    const [task, setTask] = useState({ title: "", description: "" });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
      setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(validation.isEmpty(task.title)){
        setErrorMessage(() => ({ title: "Add a title" }));
        return;
      }

      if(validation.isEmpty(task.description)){
        setErrorMessage(() => ({ description: "Add a description" }));
        return;
      }

      setLoading(true);
      const res = await dispatch(addTask(task));
      if(res?.success){
        toast.success(res?.message,style);
        navigate('/');
      }else{
        toast.error(res?.message,style);
      }

      setLoading(false);
    }
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center bg-gray-100 p-4">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-2 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <p className="text-xl text-center mb-8">Add Your Task</p>
      <Input
        placeholder="Title"
        type="text"
        name="title"
        onChange={handleChange}
        errorMessage={errorMessage['title']}
      />
      <Input
        placeholder="Description"
        name="description"
        type="text"
        onChange={handleChange}
        errorMessage={errorMessage['description']}
      />
      <Button loading={loading} type="submit" className="w-full">
        submit
      </Button>
    </form>
  </div>
  )
}

export default AddTask