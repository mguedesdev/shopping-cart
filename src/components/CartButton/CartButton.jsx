import React, { useState } from 'react';
import { BsCartFill } from 'react-icons/bs';

import './CartButton.css';

const CartButton = () => {
  const [number, setNumber] = useState(0);
  return (
    <button type="button" className="cart__button" onClick={() => setNumber(number+1)}>
      <BsCartFill/>
      <span className="cart-status">{number}</span>
    </button>
    
  );
};

export default CartButton;