import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ChefLayout from "../layout/ChefLayout/ChefLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import ChefProfile from "../pages/ChefProfile/ChefProfile";
import AuthLayout from "../layout/AuthLayout/AuthLayout";

const route = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        path: `/`,
        element: <Home />,
        loader: (()=> fetch('http://localhost:5000/'))
      },
    ],
  },
  {
    path: `/`,
    element: <AuthLayout />,
    children: [
      {
        path: `/login`,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "chef",
    element: <ChefLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefProfile />
          </PrivateRoute>
        ),
        loader: (({params})=> fetch(`http://localhost:5000/chef/${params.id}`))
      },
    ],
  },
]);

export default route;
