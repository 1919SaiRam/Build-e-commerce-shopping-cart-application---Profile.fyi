import React, { useState } from 'react';
import styles from '../styles/Cart.module.css';
import ErrorMessage from './ErrorMessage'; // Import the ErrorMessage component

function CartItem({ item, removeFromCart, updateQuantity }) {
  const [error, setError] = useState('');

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      setError('Quantity cannot be less than 1.');
      return;
    }
    setError(''); // Clear any existing errors
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className={styles.cartItem}>
      {error && <ErrorMessage message={error} />} {/* Display error message if present */}
      <img src={item.image} alt={item.title} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <div className={styles.quantityControl}>
          <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
