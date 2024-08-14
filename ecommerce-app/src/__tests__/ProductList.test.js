import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';
import productsData from '../data/products.json';

// Mock ProductCard to focus on testing ProductList
jest.mock('../components/ProductCard', () => (props) => (
  <div>
    <span data-testid="product-title">{props.product.title}</span>
    <button onClick={() => props.addToCart(props.product)}>Add to Cart</button>
  </div>
));

test('renders ProductList and passes addToCart to ProductCard', () => {
  const mockAddToCart = jest.fn();
  
  render(<ProductList addToCart={mockAddToCart} />);

  // Simulate clicking each "Add to Cart" button and ensure addToCart is called
  const addToCartButtons = screen.getAllByText(/Add to Cart/i);
  addToCartButtons.forEach((button, index) => {
    fireEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledWith(productsData[index]);
  });

  // Ensure addToCart is called the correct number of times
  expect(mockAddToCart).toHaveBeenCalledTimes(productsData.length);
});
