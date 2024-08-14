// CartPage.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CartPage from '../pages/CartPage';

// Mock data for cart items
const mockCartItems = [
  {
    id: 1,
    title: 'Test Product',
    price: 10.99,
    quantity: 1
  }
];

const mockRemoveFromCart = jest.fn();
const mockUpdateQuantity = jest.fn();

test('renders CartPage with cart items', () => {
  render(
    <Router>
      <CartPage
        cartItems={mockCartItems}
        removeFromCart={mockRemoveFromCart}
        updateQuantity={mockUpdateQuantity}
      />
    </Router>
  );

  // Check if the CartPage displays cart items
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  
  // Check if the price of the product is displayed
  const priceElements = screen.getAllByText(/\$10.99/i);
  expect(priceElements).toHaveLength(2); 

  // Check if the subtotal is displayed
  expect(screen.getByText(/Subtotal: \$10.99/i)).toBeInTheDocument();
  
  // Check if remove from cart button is present
  expect(screen.getByRole('button', { name: /Remove/i })).toBeInTheDocument();
  
  // Check if quantity controls are present
  expect(screen.getByText(/-/i)).toBeInTheDocument(); // Minus button
  expect(screen.getByText(/\+/i)).toBeInTheDocument(); // Plus button

  // Check if checkout button is present
  expect(screen.getByRole('button', { name: /Checkout/i })).toBeInTheDocument();
});
