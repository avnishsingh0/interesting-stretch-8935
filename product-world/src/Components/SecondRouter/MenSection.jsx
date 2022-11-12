import React from 'react'
import {NavLink} from 'react-router-dom'
const MenSection = (curElem) => {
    if(isLoading){
        return(
          <div>........Loading</div>
        )
      }
const [id,name,image,price,category]= curElem;
  return (
    
    
      <NavLink to={`/singleproduct/${id}`}>
        <div>
            <figure>
                <img src={image} alt={name}/>
                <figcaption>
                    {category}
                </figcaption>
            </figure>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </div>
      </NavLink>
    
  )
}

export default MenSection
