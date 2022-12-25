import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../page/dashboard";
import ErrorPage from "../page/errorPage";
import LogIn from "../page/logIn";
import Register from "../page/register";
import WellCome from "../page/wellcome";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <WellCome />
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <LogIn />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            }
        ]
    }
])

