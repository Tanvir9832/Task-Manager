import { Link, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'


const Navbar = () => {
  const navigate = useNavigate()
  const logout =()=>{
    localStorage.removeItem("taskmanagement");
    navigate('/login');
  }

  const user = useSelector((state) => state.users);
  return (
    <div className="flex flex-col justify-between items-center bg-slate-950 text-white p-8 gap-2 md:flex-row md:gap-0">
        <Link to="/" className="text-xl md:text-2xl">Task Management System</Link>
        <div className="flex gap-4 text-rose-100 md:text-lg">
            <Link to="/add-task" className="hover:text-rose-200 hover:cursor-pointer">add Task</Link>
            <div className="hover:text-rose-200 hover:cursor-pointer">{user?.user?.data?.data?.name}</div>
            <div onClick={logout} className="hover:text-rose-200 hover:cursor-pointer">Logout</div>
        </div>
    </div>
  )
}

export default Navbar