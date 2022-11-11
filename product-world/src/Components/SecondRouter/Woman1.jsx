import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import {useProductsContext} from '../Context/ProductContext'
import "./Women1.css"
const Woman1 = () => {

  const {isLoading, featureProducts}= useProductsContext();
console.log(featureProducts)
if(isLoading){
  return(
    <div>........Loading</div>
  )
}


  return (
    <div>
      
      <div className='menS'>
     {
      featureProducts.map((curElem)=>{
        return <>
         
           {/* <NavLink to={`/singleproduct${curElem.id}`}>
          <p>{curElem.price}</p>
          <img src={curElem.image} alt={curElem.name}/>
          </NavLink> */}
          <NavLink>
          <div className='menS1'>
            <img className='imgS' src={curElem.image}/>
          </div>
          </NavLink>
          
        </>
      })
     }
     </div>
    </div>
  )
}

export default Woman1
