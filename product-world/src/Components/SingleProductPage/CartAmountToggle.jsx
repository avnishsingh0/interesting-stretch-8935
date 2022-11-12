import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button className="btnamt" onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div  className="amount-style">{amount}</div>
        <button className="btnamt" onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;