

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-slate-950 text-white p-8 gap-2 md:flex-row md:gap-0">
        <div className="text-xl md:text-2xl">Task Management System</div>
        <div className="flex gap-4 text-rose-100 md:text-lg">
            <div className="hover:text-rose-200 hover:cursor-pointer">add Task</div>
            <div className="hover:text-rose-200 hover:cursor-pointer">Name</div>
            <div className="hover:text-rose-200 hover:cursor-pointer">Logout</div>
        </div>
    </div>
  )
}

export default Navbar