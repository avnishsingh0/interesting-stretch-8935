import { useContext } from "react";
import { createContext, useReducer } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext = createContext();
const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
  };
const CartProvider = ({children})=>{
    const [state,dispatch]= useReducer(reducer,initialState)
  

    const  addToCart=(id,color,amount,product)=>{
    dispatch({ type: "ADD_TO_CART", payload: { id,product } });
   };
    return (
    <CartContext.Provider value={{...state,addToCart}}>
        {children}
    </CartContext.Provider>
)}
const useCartContext = () => {
    return useContext(CartContext);
  };
export {CartProvider, useCartContext};