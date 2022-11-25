import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../page/Shared/Footer/Footer';
import Navbar from '../page/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content m-4 p-8 shadow-xl shadow-indigo-300/50 rounded-lg">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side m-4 p-4 shadow-xl shadow-indigo-300/50 rounded-lg ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Order</Link></li>
                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/allseller">All Seller</Link></li>
                        <li><Link to="/dashboard/manageseller">Manage seller</Link></li>

                        {/* {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        } */}

                    </ul>

                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashboardLayout;