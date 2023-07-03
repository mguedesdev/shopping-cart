import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';
import { BsCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

const ProductCard = ({data}) => {

  const {thumbnail, price, title } = data;

  return (
    <section className="product-card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsCartPlusFill/>
      </button>
    </section>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({}),

}.isRequired;

export default ProductCard;
