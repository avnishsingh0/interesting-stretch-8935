// // import { useCartContext } from "../Context/CartContext";

// const CartReducer = (state,action) => {
//   const {cart}= useCartContext();
  
//   if (action.type === "ADD_TO_CART") {
//     let { id,product,color ,amount,price,max,image,name} = action.payload;
//         console.log(product)
   
// let cartProduct;


// cartProduct ={
//   id:id+color,
//   name: product.name,
//   color,
//   amount,
//   image:product.image[0],
//   price: product.price,
//   max:product.stock,
// }
// console.log(cart)


//       return {
//         ...state,
//         cart:[...state.cart,cartProduct],
        
//       };
      
   
  
//       }
      
      
//     return <></>
    
// }

// export default CartReducer
import React from 'react'

const CartReducer = () => {
  return (
    <div>CartReducer</div>
  )
}

export default CartReducer