import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
               <div className='nav-items'>
                <div>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/contact" className='nav-item'>Contact</Link>
                <Link to="/about" className='nav-item'>About</Link>
                </div>
                <div>
                    <Link className='nav-item'>Privacy Policy</Link>
                    <Link className='nav-item'>Terms Of Services</Link>
                </div>
            </div>
    );
};

export default Navbar;