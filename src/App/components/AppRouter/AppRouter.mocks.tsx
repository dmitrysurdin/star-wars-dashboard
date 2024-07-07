jest.mock('pages/Dashboard', () => ({
  Dashboard: () => <div>All Characters</div>,
}));

jest.mock('pages/Character', () => ({
  Character: () => <div>Character page</div>,
}));
