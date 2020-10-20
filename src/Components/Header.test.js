import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';


test('renders header', () => {
  const { getByText } = render(<Header />);
  const text = getByText(/Meetings for/i);
  expect(text).toBeInTheDocument();
});