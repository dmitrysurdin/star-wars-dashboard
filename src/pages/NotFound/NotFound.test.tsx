import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('NotFound', () => {
  it('should render the correct heading', () => {
    render(<NotFound />);

    const headingElement = screen.getByText('404 - Not Found');

    expect(headingElement).toBeVisible();
  });

  it('renders the correct message', () => {
    render(<NotFound />);

    const messageElement = screen.getByText('The page you are looking for does not exist.');

    expect(messageElement).toBeVisible();
  });
});
