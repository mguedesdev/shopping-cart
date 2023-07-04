import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import { BsCartDashFill, BsFillCaretDownSquareFill, BsFillCaretUpSquareFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';

const CartItem = ({data}) => {
  const { cartItems, setCartItems, setShowAlert, setItemBeingRemoved, handleRemoveItem  } = useContext(AppContext);

  const {id, thumbnail, title, price, quantity} = data;

  const handleIncrementQuantity = () => {
    const updatedItems = cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    setCartItems(updatedItems);
  };

  const handleDecrementQuantity = () => {
    if (quantity === 1) {
      setItemBeingRemoved(data);
      setShowAlert(true);
      return;
    }
    const updatedItems = cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
    setCartItems(updatedItems.filter(item => item.quantity > 0));
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <button type="button" className="button__remove-item" onClick={() => handleRemoveItem(id) }>
          <BsCartDashFill/>
        </button>
        <h3 className="cart-item-title">{title}</h3>
        <div className="cart-item-amount">
          <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
          <div>
            <button type="button" className="button_amount-item" onClick={ handleDecrementQuantity }>
              <BsFillCaretDownSquareFill/>
            </button>
            <span className="amount-item-text">{quantity}</span>
            <button type="button" className="button_amount-item" onClick={ handleIncrementQuantity }>
              <BsFillCaretUpSquareFill/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({}),

}.isRequired;

export default CartItem;