
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";

function Layout() {
    return (
      <>
        {/* <Navbar /> */}
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
          element: <Home />
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