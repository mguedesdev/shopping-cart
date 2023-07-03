import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';

const Cart = () => {
  const { cartItems } = useContext(AppContext);
  return (
    <section className="cart">
      
      <div className="cart-items">
        {
          cartItems.map((Item) => <CartItem key={Item.id} data={Item}/>)
        }
      </div>
      
      <div className="cart-resume">resumo do carrinho</div>

    </section>
  );
};

export default Cart;