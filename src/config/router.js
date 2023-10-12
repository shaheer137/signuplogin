import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Login from "../views/Login";
import Signup from "../views/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Signup />,
        children: [
            // {
            //     path: "/dashboard",
            //     element: <Dashboard />,
            // },
            {
                path: "/login",
                element: <Login />,
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return <div>
         <Login/>
         <Signup/>
        <Outlet />
        </div>
}

export default Router