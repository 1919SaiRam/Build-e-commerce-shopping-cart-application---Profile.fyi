import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ConfirmationPage from '../pages/ConfirmationPage';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('ConfirmationPage', () => {
  it('renders confirmation page with order details', () => {
    // Mock location state
    useLocation.mockReturnValue({
      state: {
        cartItems: [
          {
            id: 1,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            price: 109.95,
            quantity: 2,
          },
        ],
        total: '219.90',
      },
    });

    render(
      <MemoryRouter initialEntries={['/confirmation']}>
        <Routes>
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Verify elements are in the document
    expect(screen.getByText(/Order Summary🥳:/i)).toBeInTheDocument(); // Adjusted header text
    expect(screen.getByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Final Price Paid: \$219.90/i)).toBeInTheDocument(); // Adjusted total text
  });
});
