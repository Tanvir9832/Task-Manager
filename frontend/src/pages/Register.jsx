import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";


const Register = () => {

    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(user);
        setLoading(false);
    }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-100 p-4">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-3 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <p className="text-xl text-center mb-8">Register to Task Management System</p>
      <Input
        placeholder="Name"
        type="text"
        name="name"
        onChange={handleChange}
      />
      <Input
        placeholder="Email"
        type="email"
        name="email"
        onChange={handleChange}
        required
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        onChange={handleChange}
        required
      />
      <p>Aleady have an account ? <Link to="/login">Login</Link></p>
      <Button loading={loading} type="submit" className="w-full">
        Login
      </Button>
    </form>
  </div>
  )
}

export default Register