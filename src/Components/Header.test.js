import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  Header  from './Header';



test('render header component correct', () => {
  const { getByText } = render(<Header />);

  getByText("Meetings for Jimmy");
  getByText("Meetings");
  getByText("Add meeting");
});

test('buttons in header', () => {
  const { getByText } = render(<Header />);

  fireEvent.click(getByText("Meetings"));
  fireEvent.click(getByText("Add meeting"));
})