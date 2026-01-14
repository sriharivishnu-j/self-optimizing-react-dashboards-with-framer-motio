import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../App';

test('renders dashboard title', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Self-Optimizing Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
