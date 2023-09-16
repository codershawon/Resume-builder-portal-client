import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('renders the component', () => {
  render(<App />);
  
  // You can use queries to assert the presence of elements
  expect(screen.getByText('Vite + React')).toBeInTheDocument();
  expect(screen.getByText('count is 0')).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  render(<App />);
  
  // Find the button and click it
  const button = screen.getByText('count is 0');
  fireEvent.click(button);
  
  // Check if the count increases
  expect(screen.getByText('count is 1')).toBeInTheDocument();
});
