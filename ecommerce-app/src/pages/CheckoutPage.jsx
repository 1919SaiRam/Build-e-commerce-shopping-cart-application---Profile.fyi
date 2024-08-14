import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Cart.module.css';

function CheckoutPage({ cartItems }) {
  const [discount, setDiscount] = useState('');
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    let discountAmount = 0;

    if (discount.endsWith('%')) {
      const percent = parseFloat(discount);
      if (!isNaN(percent)) {
        discountAmount = (subtotal * percent) / 100;
      }
    } else if (discount.startsWith('$')) {
      const amount = parseFloat(discount.slice(1));
      if (!isNaN(amount)) {
        discountAmount = amount;
      }
    }
    return subtotal - discountAmount;
  };

  const handleCheckout = () => {
    // Navigate to confirmation page with cart items as state
    navigate('/confirmation', { state: { cartItems } });
  };

  return (
    <div className={styles.cart}>
      <h2>Checkout</h2>
      <div className={styles.cartSummary}>
        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
        <input
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Enter discount (e.g., 10% or $5)"
          className={styles.discountInput}
        />
        <p>Total Price: ${calculateTotal().toFixed(2)}</p>
        <button onClick={handleCheckout} className={styles.checkoutButton}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
