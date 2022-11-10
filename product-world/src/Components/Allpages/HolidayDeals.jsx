import React  from "react";
import './HolidayDeals.css'
import Woman1 from "../SecondRouter/Woman1";
import { Link, Switch, Route, useRouteMatch, Outlet } from "react-router-dom";
const HolidayDeals = () =>{
    return (
        <>
            <div className="uprdiv">
                <div>
                    <img src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536"/>
                </div>
                <div>
                    <h1>Shop what you love—faster and easier.</h1>
                </div>
                <div className="uprimg">
                <img  src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536"/>
                </div>
            </div>
            <div>
                <img className="uprimg1" src="https://n.nordstrommedia.com/id/02de1670-3aa2-4e07-a234-52ce171a3d6d.png?h=400&w=1608"/>
            </div>
            <div className="imgflex">
                <div>
                    <img src="https://www.bing.com/images/blob?bcid=S9Jf0-zF4t0EgQ"/>
                </div>
                <div>
                    <img src="https://www.bing.com/images/blob?bcid=S-Hpz8D2Zt0E0A"/>
                </div>
                

                
            </div>
            <h1 className="imgund">Deals You’ll Love</h1>
            
            <nav className="nabarlink">
            
            <Link to="women1">Woman</Link>
            <Link to="men1">Men</Link>
            <Link to="designer1">Designer</Link>
            <Link to="kids1">Kids</Link>
            <Link to="beauty1">Beauty</Link>
            <Link to="home1">Home</Link>
            </nav>
            <Outlet />
        </>
    )
}
export default HolidayDeals