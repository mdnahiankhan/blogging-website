import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Myblog from "../Pages/Shared/Myblog";
import WriteBlog from "../Pages/Shared/WriteBlog.jsx/WriteBlog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                element: <Myblog></Myblog>
            },
            {
                path: '/writeblog',
                element: <WriteBlog></WriteBlog>
            }
        ]
    }
])