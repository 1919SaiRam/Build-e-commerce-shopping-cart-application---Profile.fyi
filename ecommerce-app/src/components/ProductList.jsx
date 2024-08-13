import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';
import styles from '../styles/App.module.css';

function ProductList({ addToCart }) {
  return (
    <div className={styles.productList}>
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
