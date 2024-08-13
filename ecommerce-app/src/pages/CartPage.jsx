import React from 'react';
import Cart from '../components/Cart';

function CartPage({ cartItems, removeFromCart, updateQuantity }) {
  return (
    <div>
      <h1>Your Cart</h1>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default CartPage;
