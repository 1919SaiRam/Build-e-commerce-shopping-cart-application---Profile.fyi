import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/ConfirmationPage.module.css';
import ErrorMessage from '../components/ErrorMessage'; // Assuming you have created an ErrorMessage component

function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], total = '0.00' } = location.state || {};

  // Handle cases where cartItems or total might be missing or invalid
  if (!location.state || cartItems.length === 0 || parseFloat(total) <= 0) {
    return (
      <div className={styles.confirmationPage}>
        <ErrorMessage message="Invalid order details. Please return to the cart and try again." />
        <button onClick={() => navigate('/cart')} className={styles.backToCartButton}>
          Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className={styles.confirmationPage}>
      <h1>🎉Order Confirmation🎊</h1>
      <div className={styles.orderDetails}>
        <h3>🙏Thank you for your purchase!🤝</h3>
        <h2>Order Summary🥳:</h2>
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
        <h3>Total Final Price Paid: ${total}</h3>

        <h1>Continue Shopping.... Please Click👆on E-Commerce</h1>
      </div>
    </div>
  );
}

export default ConfirmationPage;
