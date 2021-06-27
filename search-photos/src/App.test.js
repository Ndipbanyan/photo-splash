
import React from 'react'
import ReactDom from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  render(<App />);
  const searchElement = screen.getAllByTestId("search");
  expect(searchElement).toBeInTheDocument();
});
