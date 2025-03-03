import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputBox from '../InputBox';
import { BrowserRouter } from 'react-router-dom';

test('renders the component', () => {
  render(
    <BrowserRouter>
      <InputBox />
    </BrowserRouter>
  );
  const form = screen.getByText(/Enter your wardrobe/);
  expect(form).toBeInTheDocument();
});

