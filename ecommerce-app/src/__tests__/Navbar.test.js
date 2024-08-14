import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navbar with logo and cart link', () => {
  const cartItems = [{ id: 1, quantity: 2 }];
  render(
    <Router>
      <Navbar cartItems={cartItems} />
    </Router>
  );
  expect(screen.getByText(/E-Commerce/i)).toBeInTheDocument();
  expect(screen.getByText(/User's Virtual Shopping Cart \(2\)/i)).toBeInTheDocument();
});


