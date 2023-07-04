import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';
import { BsCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

const ProductCard = ({data}) => {

  const { thumbnail, price, title, id } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    const existingCartItemIndex = cartItems.findIndex(item => item.id === id);

    if (existingCartItemIndex > -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };

  return (
    <section className="product-card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart" onClick={handleAddCart}>
        <BsCartPlusFill/>
      </button>
    </section>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({}),

}.isRequired;

export default ProductCard;
