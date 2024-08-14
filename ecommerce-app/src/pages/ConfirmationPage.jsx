import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Cart.module.css';

function ConfirmationPage() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  return (
    <div className={styles.cart}>
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <p>You will receive an email confirmation shortly.</p>
      {cartItems.length > 0 && (
        <div>
          <h3>Your Order Summary:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} x ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ConfirmationPage;
