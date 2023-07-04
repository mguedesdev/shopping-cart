import React, { useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [itemBeingRemoved, setItemBeingRemoved] = useState(null);

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((cartItem) => id !== cartItem.id);
    setCartItems(updatedItems);
  };

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    showAlert,
    setShowAlert,
    itemBeingRemoved,
    setItemBeingRemoved,
    handleRemoveItem,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;