jest.mock('pages/Dashboard', () => ({
  Dashboard: () => <div>All Characters</div>,
}));

jest.mock('pages/CharacterDetails', () => ({
  Character: () => <div>Character Details</div>,
}));
