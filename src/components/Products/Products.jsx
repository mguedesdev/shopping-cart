import React, { useState, useEffect } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{

    fetchProducts('celular').then((response) => {
      setProducts(response);
    });

  }, []);

  return (
    <section className="products container">
      {products.length > 0 ? products.map((product) => <ProductCard
        key={product.id}
        data={product}/>) : null }

    </section>
  );
};

export default Products;