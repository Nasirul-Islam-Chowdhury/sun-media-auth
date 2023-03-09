import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admin from "../Pages/Home/Admin";
import PrivateRoute from "../Pages/Home/PrivateRoute";
import Login from "../Pages/Login/Login";
import MainContainer from "../Pages/MainContainer/MainContainer";
import Register from "../Pages/Register/Register";

export const route = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <MainContainer></MainContainer>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/admin',
                element: <PrivateRoute><Admin></Admin></PrivateRoute>
            }
        ]

    }


]

)