import React  from "react";
import { Link, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
const NavSecond = () =>{
    return (
        <>
            <h1>NavSecond</h1>
            <div className="nav">
            <Link to="women1">Women</Link>
            <Link to="/men1">Men</Link>
            {/* <Link to="/Designer1">Designer</Link>
            <Link to="/Kids1">Kids</Link>
            <Link to="/Beauty1">Beauty</Link>
            <Link to="/Home1">Home</Link> */}
           <Outlet/>
            </div>
        </>
    )
}
export default NavSecond