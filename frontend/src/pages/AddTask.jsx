

import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const AddTask = () => {
    const [task, setTask] = useState({ title: "", description: "" });
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      console.log(task);
      setLoading(false);
    }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-100 p-4">
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
        required
      />
      <Input
        placeholder="Description"
        name="description"
        type="text"
        onChange={handleChange}
        required
      />
      <Button loading={loading} type="submit" className="w-full">
        submit
      </Button>
    </form>
  </div>
  )
}

export default AddTask