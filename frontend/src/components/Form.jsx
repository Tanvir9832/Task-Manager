import { useNavigate } from "react-router-dom"
import Input from "./Input"
import Button from "./Button"
import { useDispatch } from "react-redux";
import { useState } from "react";
import validation from "../utils/validation";
import { toast } from "sonner";
import { style } from "../style/style";
import { getSingleTask, updateTask } from "../actions/tasksAction";
import Modal from "./Modal";

const Form = (props) => {
    const [task, setTask] = useState({ title: props.title, description: props.description });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
      setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(validation.isEmpty(task.title) && validation.isEmpty(task.description)){
        setErrorMessage(() => ({ update: "update something" }));
        return;
      }

      setLoading(true);
      const res = await dispatch(updateTask(task, props.id));
      if(res){
        toast.success("task updated",style);
        dispatch(getSingleTask(props.id));
        props.onClose();
      }else{
        toast.error("did not updated",style);
      }

      setLoading(false);
    }
  return (
    <Modal onClose={props.onClose}>
        <div className="flex w-full h-full flex-col justify-center items-center bg-gray-100">
            <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-2 bg-white p-12  rounded-lg shadow-lg w-full"
            >
            <p className="text-xl text-center mb-8">Update Task</p>
            <Input
                placeholder="Title"
                type="text"
                name="title"
                onChange={handleChange}
                errorMessage={errorMessage['update']}
                value={task.title}
            />
            <Input
                placeholder="Description"
                name="description"
                type="text"
                onChange={handleChange}
                errorMessage={errorMessage['update']}
                value={task.description}
            />
            <Button loading={loading} type="submit" className="w-full">
                submit
            </Button>
            </form>
        </div>
    </Modal>
  )
}

export default Form