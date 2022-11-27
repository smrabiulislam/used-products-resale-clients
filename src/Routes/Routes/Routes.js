import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import AllProducts from '../../page/AllProducts/AllProducts';
import Blog from '../../page/Blog/Blog';
import Contact from '../../page/Contact/Contact';
import AllBuyers from '../../page/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../page/Dashboard/AllSellers/AllSellers';
import MyOrders from '../../page/Dashboard/Buyer/MyOrders/MyOrders';
import Dashboard from '../../page/Dashboard/Dashboard/Dashboard';
import AddAProduct from '../../page/Dashboard/Seller/AddAProduct/AddAProduct';
import MyBuyers from '../../page/Dashboard/Seller/MyBuyers/MyBuyers';
import MyProducts from '../../page/Dashboard/Seller/MyProducts/MyProducts';
import Home from '../../page/Home/Home/Home';
import SignIn from '../../page/SignIn/SignIn';
import SignUp from '../../page/SignUp/SignUp';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://resellerhub-server-assignment-12.vercel.app/categories')
            },
            {
                path: '/products/:category',
                loader: ({ params }) => fetch(`https://resellerhub-server-assignment-12.vercel.app/products/${params.category}`),
                element: <PrivateRoutes><AllProducts></AllProducts></PrivateRoutes>,

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

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
                loader: () => fetch("https://resellerhub-server-assignment-12.vercel.app/users"),
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProduct></AddAProduct>,
                loader: () => fetch('https://resellerhub-server-assignment-12.vercel.app/categories')
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts></MyProducts>
            },
        ]
    }
])

export default router;