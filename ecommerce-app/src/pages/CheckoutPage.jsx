import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/CheckoutPage.module.css';
import ErrorMessage from '../components/ErrorMessage'; // Corrected import path


function CheckoutPage({ cartItems }) {
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState('none');
  const [customDiscount, setCustomDiscount] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateDiscount = (subtotal) => {
    let discountAmount = 0;

    if (discountType === 'fixed' || discountType === 'percentage' || discountType === 'custom') {
      if (discount < 0 || customDiscount < 0) {
        setError('Discount value cannot be negative.');
        return 0;
      }
    }

    switch (discountType) {
      case 'fixed':
        discountAmount = discount;
        break;
      case 'percentage':
        discountAmount = (subtotal * discount) / 100;
        break;
      case 'bogo':
        discountAmount = cartItems.reduce((acc, item) => {
          const freeItems = Math.floor(item.quantity / 2);
          return acc + freeItems * item.price;
        }, 0);
        break;
      case 'bulk':
        if (subtotal > 100) {
          discountAmount = (subtotal * 20) / 100;
        }
        break;
      case 'custom':
        discountAmount = customDiscount;
        break;
      default:
        break;
    }

    return discountAmount;
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const discountAmount = calculateDiscount(subtotal);
    return (subtotal - discountAmount).toFixed(2);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setError('Your cart is empty! Please add items before checking out.');
      return;
    }
    navigate('/confirmation', { state: { cartItems, total: calculateTotal() } });
  };

  return (
    <div className={styles.checkoutPage}>
      {error && <ErrorMessage message={error} />} {/* Display error message if present */}
      <h1>Cart Summary Section:</h1>
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

        <div className={styles.discountSection}>
          <label>
            Discount Type:
            <select value={discountType} onChange={(e) => setDiscountType(e.target.value)}>
              <option value="none">None</option>
              <option value="fixed">Fixed ($10 off)</option>
              <option value="percentage">Percentage (10% off)</option>
              <option value="bogo">Buy 1 Get 1 Free</option>
              <option value="bulk">20% off on orders above $100</option>
              <option value="custom">Custom Discount</option>
            </select>
          </label>
          {(discountType === 'fixed' || discountType === 'percentage') && (
            <label>
              Discount Value:
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value))}
                min="0"
                step="0.01"
              />
            </label>
          )}
          {discountType === 'custom' && (
            <label>
              Custom Discount Amount:
              <input
                type="number"
                value={customDiscount}
                onChange={(e) => setCustomDiscount(parseFloat(e.target.value))}
                min="0"
                step="0.01"
              />
            </label>
          )}
        </div>

        <h3>Discount: ${calculateDiscount(parseFloat(calculateSubtotal())).toFixed(2)}</h3>
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={handleCheckout} className={styles.checkoutButton}>
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
