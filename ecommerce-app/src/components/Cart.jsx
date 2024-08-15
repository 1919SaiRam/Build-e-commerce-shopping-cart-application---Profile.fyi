import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import styles from '../styles/Cart.module.css';
import ErrorMessage from './ErrorMessage'; // Import the ErrorMessage component

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setError('Your cart is empty! Please add items before checking out.');
      return;
    }
    setError(''); // Clear any existing errors
    navigate('/checkout');
  };

  return (
    <div className={styles.cart}>
      {error && <ErrorMessage message={error} />} {/* Display error message if present */}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
      <div className={styles.cartSummary}>
        <p>Subtotal: ${calculateSubtotal()}</p>
        <button onClick={handleCheckout} className={styles.checkoutButton}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
