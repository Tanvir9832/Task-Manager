import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../utils/validation';
import { useDispatch } from "react-redux";
import { login } from '../actions/usersAction';


const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [errorMessage,setErrorMessage] = useState({});
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
      e.preventDefault();
      if(validation.isEmpty(user.email)){
        setErrorMessage(() => ({ email: "Email is missing" }));
        return;
      }

      if(validation.isEmpty(user.password)){
        setErrorMessage(() => ({ password: "Password is missing" }));
        return;
      }

      if(!validation.isValidEmail(user.email)){
        setErrorMessage(() => ({ email: "Enter a valid email" }));
        return;
      }

      setLoading(true);
      const res = await dispatch(login(user));
      setLoading(false);
      if(!res?.success){
        setErrorMessage(() => ({ credential: res?.message }));
      }
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
        type="text"
        name="email"
        onChange={handleChange}
        errorMessage={errorMessage['email']}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        onChange={handleChange}
        errorMessage={errorMessage['password']}
      />
      <p className='text-center text-red-500'>{errorMessage['credential']}</p>
      <p>Create Account ? <Link to="/register">Register</Link></p>
      <Button loading={loading} type="submit" className="w-full">
        Login
      </Button>
    </form>
  </div>
  )
}

export default Login