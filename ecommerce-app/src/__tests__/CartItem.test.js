import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../components/CartItem';

test('renders cart item and handles quantity and removal', () => {
  const item = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    quantity: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  };
  const removeFromCart = jest.fn();
  const updateQuantity = jest.fn();

  render(
    <CartItem
      item={item}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
    />
  );

  // Check if the item details are rendered
  expect(screen.getByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)).toBeInTheDocument();

  // Select quantity buttons directly
  const decreaseButton = screen.getAllByText(/-/i)[0]; // Selects the first "-" button
  const increaseButton = screen.getAllByText(/\+/i)[0]; // Selects the first "+" button

  // Simulate quantity decrease
  fireEvent.click(decreaseButton);
  
  // Add a short wait to allow the event to process
  setTimeout(() => {
    expect(updateQuantity).toHaveBeenCalledWith(item.id, 'decrease');
  }, 100);

  // Simulate quantity increase
  fireEvent.click(increaseButton);
  
  // Add a short wait to allow the event to process
  setTimeout(() => {
    expect(updateQuantity).toHaveBeenCalledWith(item.id, 'increase');
  }, 100);

  // Simulate click on "Remove" button
  fireEvent.click(screen.getByText(/Remove/i));
  expect(removeFromCart).toHaveBeenCalledWith(item.id);
});
