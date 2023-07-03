import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

const Products = () => {
  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() =>{

    fetchProducts('Livros').then((response) => {
      setProducts(response);
      setLoading(false);
    });

  }, []);

  return (
    ( loading && <Loading/> ) || (
      <section className="products container">
        {products.length > 0 ? products.map((product) => <ProductCard
          key={product.id}
          data={product}/>) : <h1>OI</h1> }

      </section>
    )
  );
};

export default Products;