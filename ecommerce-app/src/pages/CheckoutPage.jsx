import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/CheckoutPage.module.css';

function CheckoutPage({ cartItems }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Any logic before checkout (e.g., saving order data) can be added here
    navigate('/confirmation');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className={styles.checkoutPage}>
      <h1>Checkout</h1>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.cartItemImage} />
            <div className={styles.cartItemDetails}>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.summary}>
        <h3>Subtotal: ${calculateSubtotal()}</h3>
        <button onClick={handleCheckout} className={styles.checkoutButton}>
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
