import React, { useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = {
    products,
    setProducts
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