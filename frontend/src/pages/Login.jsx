import Input from '../components/Input';
import Button from '../components/Button';
import { Spinner } from '../components/Spninner';

const Login = () => {
    const handleSubmit =()=>{

    }
    const handleChange=()=>{

    }
    const loading = false;
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-100 p-4">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-3 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <p className="text-xl text-center mb-4">Login to Task Management System</p>
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
      <Button loading={loading} type="submit" className="w-full">
        Login
      </Button>
    </form>
  </div>
  )
}

export default Login