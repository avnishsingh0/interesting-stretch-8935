import React,{useState} from 'react'
import { FaCheck } from "react-icons/fa";
import './AddToCart.css'
import { NavLink } from 'react-router-dom';
import CartAmountToggle from './CartAmountToggle';
const AddToCart = ({product}) => {
    const {id,colors,stock}=product;
    const [color, setColor]= useState(colors[0]);
    const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
     
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
    
    console.log(colors)
  return (
    <div>
        <p>
            Colors:
            {
                colors.map((curColor,index)=>{
                    return (
                        <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
                    )
                   
                })
            }
        </p>
        <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart">
        <button className="btn">Add To Cart</button>
      </NavLink>

    </div>
  )
}

export default AddToCart