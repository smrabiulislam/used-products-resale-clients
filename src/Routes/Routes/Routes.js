import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../page/Blog/Blog';
import Contact from '../../page/Contact/Contact';
import AllUser from '../../page/Dashboard/AllUser/AllUser';
import Dashboard from '../../page/Dashboard/Dashboard/Dashboard';
import MyOrder from '../../page/Dashboard/MyOrder/MyOrder';
import Home from '../../page/Home/Home/Home';
import SignIn from '../../page/SignIn/SignIn';
import SignUp from '../../page/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            // {
            //     path: '/dashboard',
            //     element: <Dashboard></Dashboard>
            // },

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUser></AllUser>
            },
        ]
    }
])

export default router;