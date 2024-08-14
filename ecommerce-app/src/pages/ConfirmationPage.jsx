import React from 'react';
import styles from '../styles/ConfirmationPage.module.css'; // Path to CSS module

function ConfirmationPage({ cartItems }) {
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className={styles.confirmationPage}>
      <h1>Order Confirmation !</h1>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <p>You will receive an email confirmation shortly.</p>
      <div className={styles.orderSummary}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.orderItem}>
            <img src={item.image} alt={item.title} className={styles.orderItemImage} />
            <div className={styles.orderItemDetails}>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h3>Total: ${calculateSubtotal()}</h3>
      </div>
    </div>
  );
}

export default ConfirmationPage;
