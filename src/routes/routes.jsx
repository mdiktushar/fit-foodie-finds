import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ChefLayout from "../layout/ChefLayout/ChefLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import ChefProfile from "../pages/ChefProfile/ChefProfile";
import Page404 from "../pages/404/Page404";
import CommonLayout from "../layout/CommonLayout/CommonLayout";
import Blog from "../pages/Blog/Blog";

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
    element: <CommonLayout />,
    children: [
      {
        path: `/login`,
        element: <Login />,
      },
      {
        path: `/register`,
        element: <Register />,
      },
      {
        path: `/blog`,
        element: <Blog />
      }
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
  {
    path: '*',
    element: <CommonLayout />,
    children: [
      {
        path: '*',
        element: <Page404 />
      }
    ]
  }
]);

export default route;
