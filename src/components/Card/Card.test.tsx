import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './Card';
import { MOCK_CARD_NAME, MOCK_ID } from './Card.mocks';

describe('Card component', () => {
  it('should render card with given name and id', () => {
    render(<Card name={MOCK_CARD_NAME} id={MOCK_ID} />, { wrapper: MemoryRouter });

    const nameElement = screen.getByText(MOCK_CARD_NAME);

    expect(nameElement).toBeVisible();
  });

  it('should card have proper link', () => {
    render(<Card name={MOCK_CARD_NAME} id={MOCK_ID} />, { wrapper: MemoryRouter });

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', `/people/${MOCK_ID}`);
  });
});
