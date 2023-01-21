import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Footer.css';

const Footer = () => {
    return (
            <div className='footer'>
                <p className='brand-name'>Rent Vroom</p>
                <p className='address'>Rentvroom Pvt. Ltd.</p>
                <p className='address'>No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla <br /> Bengaluru, Karnataka 560034</p>
                <div className="icons">
                <i class="social-icons fa-brands fa-twitter"></i>
                <i class="social-icons fa-brands fa-square-instagram"></i>
                <i class="social-icons fa-brands fa-linkedin"></i>
                </div>
                <Navbar></Navbar>
            </div>
            
      
    );
};

export default Footer;