import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner'
function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Protected element={<Home />} />
        }
      ],
    },
    {
      path: "/register",
      element: <Registration />,
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
  return (
    <>
    <RouterProvider router={router} />
    <Toaster />
    </>
  )
}

export default App
