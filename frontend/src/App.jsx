import { RouterProvider} from "react-router-dom";
import { Toaster } from 'sonner'
import router from "./router/Routes";
import './App.css'


function App() {
  
  return (
    <>
    <RouterProvider router={router} />
    <Toaster />
    </>
  )
}

export default App
