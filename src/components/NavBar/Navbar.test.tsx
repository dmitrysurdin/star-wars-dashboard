import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoute } from 'const';
import { Navbar } from './Navbar';
import { NAVBAR_TEXT_MOCK } from './Navbar.mocks';

describe('Navbar', () => {
  it('should render Navbar with icon and text', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const navbarTitle = screen.getByText(NAVBAR_TEXT_MOCK);
    const iconElement = screen.getByTestId('nav-icon');

    expect(navbarTitle).toBeVisible();
    expect(iconElement).toBeVisible();
  });

  it('should Navbar have proper link attribute', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const link = screen.getByRole('link', { name: new RegExp(NAVBAR_TEXT_MOCK, 'i') });

    expect(link).toHaveAttribute('href', AppRoute.Dashboard);
  });
});
