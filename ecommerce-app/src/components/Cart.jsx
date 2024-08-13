import React from 'react';
import CartItem from './CartItem';
import styles from '../styles/Cart.module.css';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className={styles.cart}>
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
        {/* Add discount calculation and final total here */}
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
