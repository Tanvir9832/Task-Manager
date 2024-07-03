import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
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
      className="flex flex-col justify-center items-center gap-2 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <p className="text-xl text-center mb-8">Login into Task Management System</p>
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
      <p>Create Account ? <Link to="/register">Register</Link></p>
      <Button loading={loading} type="submit" className="w-full">
        Login
      </Button>
    </form>
  </div>
  )
}

export default Login