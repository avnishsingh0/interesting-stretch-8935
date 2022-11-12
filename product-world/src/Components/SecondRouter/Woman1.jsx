import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
// import {useProductsContext} from '../Context/ProductContext'
import { useProductsContext } from '../Context/ProductContext';
// import { useProductsContext } from '../Context/MenContext';
import "./Women1.css"
const Woman1 = () => {

  const {isLoading, womenDetails}= useProductsContext();
console.log(womenDetails)
if(isLoading){
  return(
    <div>........Loading</div>
  )
}


  return (
    <div>
      
      <div className='menS'>
     {
      womenDetails.map((curElem)=>{
        return <>
          <div className='menS1'>
          <NavLink to={`/singleproduct/${curElem.id}`}>
            <img className='imgS' src={curElem.image}/>
            <div className='color_main'>
            <div className='color_round'></div>
            <div className='color_round'></div>
            <div className='color_round'></div>
            <div className='color_round'></div>
            <div className='color_round'></div>
            </div>
            <h4 className='h4c'>{curElem.offer}</h4>
            <p>{curElem.company}</p>
            <h4 className='h4c'>{curElem.price}</h4>
            <p>{curElem.price1}</p>
            <p>{curElem.price2}</p>
            <span class={curElem.reting}></span>
            <span class={curElem.reting}></span>
            <span class={curElem.reting}></span>
            <span class={curElem.reting}></span>
            <span class={curElem.reting}></span>

          </NavLink>
          </div>
          
        </>
      })
     }
     </div>
    </div>
  )
}

export default Woman1
