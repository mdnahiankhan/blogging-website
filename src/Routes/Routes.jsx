import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Myblog from "../Pages/Shared/Myblog";
import WriteBlog from "../Pages/Shared/WriteBlog.jsx/WriteBlog";
import UpdateUser from "../Pages/Update/UpdateUser";
import PrivateRoutes from "./PrivateRoutes/PrivateRutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoutes><Home></Home></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/myblog',
                element: <PrivateRoutes> <Myblog></Myblog></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <UpdateUser></UpdateUser>,
                loader: ({ params }) => fetch(`https://blogging-site-server.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/writeblog',
                element: <PrivateRoutes><WriteBlog></WriteBlog></PrivateRoutes>
            }
        ]
    }
])