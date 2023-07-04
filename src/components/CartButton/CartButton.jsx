import React, { useContext } from 'react';
import { BsCartFill } from 'react-icons/bs';

import './CartButton.css';
import AppContext from '../../context/AppContext';

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
  return (
    <button type="button" className="cart__button" onClick={() => setIsCartVisible(!isCartVisible)}>
      <BsCartFill/>
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
      
    </button>
    
  );
};

export default CartButton;