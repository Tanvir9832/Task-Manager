
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import Navbar from "../components/Navbar";
import SingleTask from "../pages/SingelTask";
import Protected from "../auth/Protected";

function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Protected element={<Home />} />
        },
        {
            path: "/add-task",
            element: <Protected element={<AddTask />} />
        },
        {
            path: "/task/:id",
            element: <Protected element={<SingleTask />} />
        }
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:"*",
      element: <NotFoundPage/>
    },
  ]);

  export default router;