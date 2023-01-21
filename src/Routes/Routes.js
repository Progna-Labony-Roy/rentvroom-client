import { createBrowserRouter } from "react-router-dom";
import CarDetails from "../components/CarDetails/CarDetails";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

export const routes= createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/car/:id',
                element:<CarDetails></CarDetails>,
                loader: ({params})=> fetch(`https://rentvroom-server.vercel.app/car/${params.id}`)
            }
        ]
    }
])