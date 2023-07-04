import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      
      <div className="cart-items">
        {cartItems.map((Item) => <CartItem key={Item.id} data={Item}/>)}
      </div>
      
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>

    </section>
  );
};

export default Cart;