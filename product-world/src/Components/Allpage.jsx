import React  from "react";
import { Routes, Route } from "react-router-dom";
import NavRouter from '../Components/NavRouter';
import Navbar from "./Navbar";
import HolidayDeals from "./Allpages/HolidayDeals";
import HolidayGifts from "./Allpages/HolidayGifts";
import Women from "./Allpages/Woman";
import Men from "./Allpages/Men";
import Kids from "./Allpages/Kids";
import Young from "./Allpages/Young";
import ActiveWear from "./Allpages/ActiveWear";
import Home from "./Allpages/Home";
import Beauty from "./Allpages/Beauty";
import Designer from "./Allpages/Designer";
import Threads from "./Allpages/Threads";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer/Footer";
import Woman1 from "./SecondRouter/Woman1";
import SingleProduct from "./Allpages/SingleProduct";
const AllPage = () =>{
    return (
        <>
    <div>
      <Navbar/>
      <NavRouter/>
      
      <Routes>
      <Route path="/" element={<HolidayGifts/>}/>
      
      <Route path="holidayDeals" element={<HolidayDeals/>}>
      
          <Route path="women1" element={<Woman1/>}/>
          <Route path="men1" element={<h1>men</h1>} />
          <Route path="designer1" element={<h1>designer</h1>} />
          <Route path="kids1" element={<h1>kids</h1>} />
          <Route path="beauty1" element={<h1>beauty</h1>} />
          <Route path="home1" element={<h1>home</h1>}/>
      </Route>
      <Route path="/women" element={<Women/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/youngAdult" element={<Young/>}/>
      <Route path="/activeWear" element={<ActiveWear/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Beauty" element={<Beauty/>}/>
      <Route path="/Designer" element={<Designer/>}/>
      <Route path="/theThread" element={<Threads/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </div>
    <Footer/>
        </>
    )
}
export default AllPage