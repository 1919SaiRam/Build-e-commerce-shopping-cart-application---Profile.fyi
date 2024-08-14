// src/__tests__/Cart.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from '../components/Cart';

// Mock data for cart items
const mockCartItems = [
  {
    id: 1,
    title: 'Test Product',
    price: 10.99,
    quantity: 1,
    image: '' // Provide a dummy image URL or leave it empty
  }
];

const mockRemoveFromCart = jest.fn();
const mockUpdateQuantity = jest.fn();

test('renders Cart with cart items and interactions', () => {
  render(
    <Router>
      <Cart
        cartItems={mockCartItems}
        removeFromCart={mockRemoveFromCart}
        updateQuantity={mockUpdateQuantity}
      />
    </Router>
  );

  // Check if the Cart component displays cart items
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();

  // Check if the price of the product is displayed specifically for the item
  const itemPrice = screen.getByText(/^\$10\.99$/i); // Exact match for item price
  expect(itemPrice).toBeInTheDocument();

  // Check if the subtotal is displayed separately
  const subtotalText = screen.getByText(/Subtotal:/i);
  expect(subtotalText).toBeInTheDocument();

  // Verify that the subtotal value is correct
  const subtotalValue = screen.getByText(/^\$10\.99$/i);
  expect(subtotalValue).toBeInTheDocument();

  // Check if remove from cart button is present
  expect(screen.getByRole('button', { name: /Remove/i })).toBeInTheDocument();

  // Check if quantity controls are present
  const decreaseButton = screen.getByText(/-/i);
  const increaseButton = screen.getByText(/\+/i);
  expect(decreaseButton).toBeInTheDocument(); // Minus button
  expect(increaseButton).toBeInTheDocument(); // Plus button

  // Simulate button clicks
  fireEvent.click(decreaseButton);
  expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 'decrease');

  fireEvent.click(increaseButton);
  expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 'increase');

  fireEvent.click(screen.getByRole('button', { name: /Remove/i }));
  expect(mockRemoveFromCart).toHaveBeenCalledWith(1);

  // Check if checkout button is present
  expect(screen.getByRole('button', { name: /Checkout/i })).toBeInTheDocument();
});
