// src/components/CartItem.jsx
import React from 'react';
import styles from '../styles/Cart.module.css';

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div className={styles.quantityControl}>
          <button onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
