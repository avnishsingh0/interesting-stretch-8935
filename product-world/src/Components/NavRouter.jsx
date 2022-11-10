import React  from "react";
import { Link } from "react-router-dom";
import { FaGift} from "react-icons/fa";

const NavRouter = () =>{
    return (
        <>
            <div className="nav">
            <Link to="/"><FaGift className="giftfont"/>Holiday Gifts</Link>
            <Link to="/holidayDeals">Holiday Deals</Link>
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/youngAdult">Young Adult</Link>
            <Link to="/activeWear">Activewear</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Beauty">Beauty</Link>
            <Link to="/Designer">Designer</Link>
            <Link to="/theThread">The Thread</Link>
            </div>
        </>
    )
}
export default NavRouter