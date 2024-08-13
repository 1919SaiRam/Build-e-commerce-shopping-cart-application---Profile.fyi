import React from 'react';
import ProductList from '../components/ProductList';

function Home({ addToCart }) {
  return (
    <div>
      <h1>Product Listing</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Home;
