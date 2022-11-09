import React from 'react';
import './Navbar.css'

import { FaStoreAltSlash,FaShoppingBag,FaAngleDown,FaRegWindowRestore } from "react-icons/fa";

const Navbar = ()=>{
    return(
        <>
            <div className='uper_nav'><h3 className='uper_h3' >Get a $60 Bonus Note! Offer ends November 20. Restrictions apply. Apply Now</h3></div>
            <div className='uper_nav-1'>
                <div className='uper_nav-2'>
                <img src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg" alt="" />
                </div>
                <div className='uper_nav-3'>
                    <input placeholder='Search for products or brands' />
                </div>
                <div className='uper_nav-4'>
                <div className='dropdown'>
                <a className="dropbtn" href="">Sign In<FaAngleDown className='font1'/></a>
                <div className="dropdown-content">
                
                <a href="" className='signIn' >Sign In | Create Account</a>
                <h3>Your Account</h3>
                <p><FaRegWindowRestore/>Purchase</p>
                <p>Wish List</p>
                <p>The Nordy Club Rewards</p>
                <p>Shipping Addresses</p>
                <p>Payment Method</p>
                <p>Your Stylists</p>
                <p>Pay & Manage Nordstrom Card</p>
                <p>Account Settings</p>
                <p>Password & Personal info</p>
                <p>Email & mail Prefrences</p>
                <p>Store & Events</p>
                <h4>We're here to help, 24/7</h4>
                <p>Contect Us</p>
               
                </div>
                </div>
                <a href=""><FaStoreAltSlash className='font'/>Store</a>
                <a href=""><FaRegWindowRestore className='font2'/>Purchase <FaShoppingBag className='font2'/></a>
               
                </div>
                
                
            </div>
                
            <hr/>
        </>
    )
}
export default Navbar;