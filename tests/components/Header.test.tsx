import React from 'react';
import { render, screen } from '@testing-library/react';
import Header  from '../../src/components/Header';

describe('Header component', () => {
  test('renders the correct text content', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('React testing playground');
  });

  test('renders with the correct styles', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveStyle(`
      width: 100%;
      padding: 2%;
      background-color: red;
      color: white;
      text-align: center;
    `);
  });
});