import { useEffect, useState } from "react"
import Button from "../components/Button"
import Task from "../components/Task";
import {useDispatch, useSelector} from 'react-redux'
import { getAllTasks } from "../actions/tasksAction";


const Home = () => {
    const [page,setPage] = useState(1);
    const [search,setSearch] = useState(""); 

    const dispatch = useDispatch();
    useEffect(()=>{
        (function(){
            dispatch(getAllTasks(page,search));
        })();
    },[page,search]);

    const task = useSelector((state)=>state.tasks);
  return (
    <div>
        <div className="flex flex-col gap-8 mt-8 h-screen">
        <div className="flex justify-center items-center ml-2 gap-1">
          <input onChange={(e)=>setSearch(e.target.value)} className="w-[30%] px-3 py-2" autoFocus placeholder="Search with title..." />
          <Button className="mt-1">search</Button>
        </div>
            <div className="flex flex-wrap justify-center content-center m-2">
                {task?.tasks?.map((task, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <Task task={task} />
                    </div>
                ))}
            </div>
        <div className="flex items-center justify-center gap-4 mr-2">
        <Button disabled={page <= 1 ? true : false} onClick={() => setPage((prev) =>prev > 1 ? prev - 1 : prev )} className={"bg-purple-700"}>Prev</Button>
          <p>{page}</p>
          <Button disabled={task?.tasks?.length < 10 ? true : false} onClick={() => setPage((prev) => prev + 1 )} className={"bg-purple-700"}>Next</Button>
        </div>
    </div>
    </div>
  )
}

export default Home