import React from 'react'
import { NavLink } from 'react-router-dom';
import './Error.css'
const ErrorPage = () => {
  return (
    <div>
        <div className='container'>
            <div>
                <h2>404</h2>
                <h2>UH OH! You're lost.</h2>
                <p>The page you are looking for does not exist. How you got here
                is a mystery. But you can click the button below to go back to the homepage.</p>
            </div>
            <NavLink to={"/holidayDeals"}>
            <button>Go to Home</button>
            </NavLink>
            
        </div>
    </div>
  )
};


export default ErrorPage
