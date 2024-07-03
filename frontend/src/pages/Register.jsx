import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../actions/usersAction";
import validation from "../utils/validation";


const Register = () => {

    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [errorMessage,setErrorMessage] = useState({});
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(validation.isEmpty(user.name)){
          setErrorMessage(() => ({ name: "Name is missing" }));
          return;
        }
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
        const res = await dispatch(register(user));
        if(!res?.success){
          setErrorMessage(() => ({ email: res?.message }));
        }else{
          navigate('/login')
        }
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
        errorMessage={errorMessage["name"]}
      />
      <Input
        placeholder="Email"
        type="text"
        name="email"
        onChange={handleChange}
        errorMessage={errorMessage["email"]}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        onChange={handleChange}
        errorMessage={errorMessage["password"]}
      />
      <p>Aleady have an account ? <Link to="/login">Login</Link></p>
      <Button loading={loading} type="submit" className="w-full">
        Register
      </Button>
    </form>
  </div>
  )
}

export default Register