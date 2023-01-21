import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Brand from '../Brand/Brand';
import Navbar from '../Navbar/Navbar';


const Layout = () => {
    return (
        <div>
            <Brand></Brand>
            <div className="main-content">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;