// // src/__tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import ProductList from '../components/ProductList';

// Mock the ProductList component to test if it's receiving props correctly
jest.mock('../components/ProductList', () => (props) => (
  <div>
    <span data-testid="addToCart-prop">{props.addToCart ? 'has addToCart' : 'no addToCart'}</span>
  </div>
));

test('renders Home component and checks ProductList prop', () => {
  const mockAddToCart = jest.fn();
  render(<Home addToCart={mockAddToCart} />);
  
  // Check if the heading is rendered
  expect(screen.getByText(/Product Listing/i)).toBeInTheDocument();

  // Check if the ProductList component receives the addToCart prop
  expect(screen.getByTestId('addToCart-prop')).toHaveTextContent('has addToCart');
});
