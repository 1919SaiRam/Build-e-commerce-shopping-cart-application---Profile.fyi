// ProductCard.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';


const mockAddToCart = jest.fn();
const product = {
  id: 1,
  title: 'Test Product',
  price: 10.99,
  image: 'https://example.com/image.jpg',
};

test('renders ProductCard and adds product to cart', () => {
  render(<ProductCard product={product} addToCart={mockAddToCart} />);
  
  expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  expect(screen.getByText(/\$10.99/i)).toBeInTheDocument();
  
  fireEvent.click(screen.getByText(/Add to Cart/i));
  expect(mockAddToCart).toHaveBeenCalledWith(product);
});
