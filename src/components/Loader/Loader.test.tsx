import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render CircularProgress', () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId('loader');

    expect(loaderElement).toBeVisible();
  });
});
