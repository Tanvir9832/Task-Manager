import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-slate-950 text-white p-8 gap-2 md:flex-row md:gap-0">
        <Link to="/" className="text-xl md:text-2xl">Task Management System</Link>
        <div className="flex gap-4 text-rose-100 md:text-lg">
            <Link to="/add-task" className="hover:text-rose-200 hover:cursor-pointer">add Task</Link>
            <div className="hover:text-rose-200 hover:cursor-pointer">Name</div>
            <div className="hover:text-rose-200 hover:cursor-pointer">Logout</div>
        </div>
    </div>
  )
}

export default Navbar