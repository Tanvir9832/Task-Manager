import { useState } from "react"
import Button from "../components/Button"
import Task from "../components/Task"


const Home = () => {
    const [page,setPage] = useState(1);
    const [search,setSearch] = useState(""); 
    const totalDataCount = 10;
    const tasks = [
        {
        _id : 1,
        title : "Hello",
        description : "",
        date : "1-2-3",
        status : true,
        },
        {
         _id : 2,
        title : "Hello",
        description : "",
        date : "1-2-3",
        status : true,
        },
        {
        _id : 3,
        title : "Hello",
        description : "The standard chunk of Lorem Ipsum used since the 1500 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
        date : "1-2-3",
        status : true,
        },
        {
        _id : 3,
        title : "Hello",
        description : "The standard chunk of Lorem Ipsum used since the 1500 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
        date : "1-2-3",
        status : true,
        },

        {
            _id : 3,
            title : "Hello",
            description : "The standard chunk of Lorem Ipsum used since the 1500 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
            date : "1-2-3",
            status : true,
        },
        {
            _id : 3,
            title : "Hello",
            description : "The standard chunk of Lorem Ipsum used since the 1500 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
            date : "1-2-3",
            status : true,
        }
    ]
  return (
    <div>
        <div className="flex flex-col gap-8 mt-8 h-screen">
        <div className="flex justify-center items-center ml-2 gap-1">
          <input onChange={(e)=>setSearch(e.target.value)} className="w-[30%] px-3 py-2" autoFocus placeholder="Search with title..." />
          <Button className="mt-1">search</Button>
        </div>
            <div className="flex flex-wrap justify-center m-2">
                {tasks.map((task, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <Task task={task} />
                    </div>
                ))}
            </div>
        <div className="flex items-center justify-center gap-4 mr-2">
        <Button disabled={page <= 1 ? true : false} onClick={() => setPage((prev) => prev > 1 ? prev - 1 : prev)} className={"bg-purple-700"}>Prev</Button>
          <p>{page}</p>
          <Button disabled={page * 10 < totalDataCount ? false : true} onClick={() => setPage((prev) => page * 10 < totalDataCount ? prev + 1 : prev)} className={"bg-purple-700"}>Next</Button>
        </div>
    </div>
    </div>
  )
}

export default Home