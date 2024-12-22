import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../All-layout/MainLayout";
import Home from "../All-pages/Home";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import JobDetails from "../Components/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../All-pages/JobApply";
import My_Application from "../All-pages/My_Application";
import AddJob from "../All-pages/AddJob";
import MyPostedJob from "../All-pages/MyPostedJob";
import View_Details_Application from "../All-pages/View_Details_Application";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/my-application',
                element: <PrivateRoutes><My_Application></My_Application></PrivateRoutes>,
            },
            {
                path: '/addJob',
                element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>,
            },
            {
                
                path: '/view-details-application/:id',
                element: <PrivateRoutes><View_Details_Application></View_Details_Application></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/job-application/jobs/${params.id}`)
                
            },
            {
                path: '/my-posted-job',
                element: <PrivateRoutes><MyPostedJob></MyPostedJob></PrivateRoutes>,
            }
        ]
    }
])