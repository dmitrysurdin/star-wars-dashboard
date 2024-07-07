import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharacterDetails } from './CharacterDetails';
import { useCharacterDetails } from './hooks/useCharacterDetails';
import { CHARACTER_DETAILS_MOCK, ERROR_MESSAGE } from './CharacterDetails.mocks';

jest.mock('./hooks/useCharacterDetails');

describe('CharacterDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading state', () => {
    (useCharacterDetails as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
      setCharacterDetails: jest.fn(),
    });

    render(<CharacterDetails />);

    expect(screen.getByTestId('loader')).toBeVisible();
  });

  it('should render error state', () => {
    (useCharacterDetails as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: ERROR_MESSAGE,
      setCharacterDetails: jest.fn(),
    });

    render(<CharacterDetails />);

    expect(screen.getByText(ERROR_MESSAGE)).toBeVisible();
  });

  it('should render character details', () => {
    (useCharacterDetails as jest.Mock).mockReturnValue({
      data: CHARACTER_DETAILS_MOCK,
      loading: false,
      error: null,
      setCharacterDetails: jest.fn(),
    });

    render(<CharacterDetails />);

    expect(screen.getByLabelText(/name/i)).toHaveValue('Luke Skywalker');
    expect(screen.getByLabelText(/height/i)).toHaveValue('172');
    expect(screen.getByLabelText(/mass/i)).toHaveValue('77');
    expect(screen.getByLabelText(/birthYear/i)).toHaveValue('19BBY');
    expect(screen.getByLabelText(/gender/i)).toHaveValue('male');
    expect(screen.getByLabelText(/hairColor/i)).toHaveValue('blond');
    expect(screen.getByLabelText(/skinColor/i)).toHaveValue('fair');
    expect(screen.getByLabelText(/eyeColor/i)).toHaveValue('blue');
  });

  it('should enable editing mode and allows changes', () => {
    (useCharacterDetails as jest.Mock).mockReturnValue({
      data: CHARACTER_DETAILS_MOCK,
      loading: false,
      error: null,
      setCharacterDetails: jest.fn(),
    });

    render(<CharacterDetails />);

    userEvent.click(screen.getByText(/edit/i));

    const nameInput = screen.getByLabelText(/name/i);

    fireEvent.change(nameInput, { target: { value: 'Darth Vader' } });

    expect(nameInput).toHaveValue('Darth Vader');

    userEvent.click(screen.getByText(/save/i));

    expect(useCharacterDetails().setCharacterDetails).toHaveBeenCalledWith({
      ...useCharacterDetails().data,
      name: 'Darth Vader',
    });
  });
});
