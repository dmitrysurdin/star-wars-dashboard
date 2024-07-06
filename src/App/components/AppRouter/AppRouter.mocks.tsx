jest.mock('pages/Dashboard', () => ({
  Dashboard: () => <div>Dashboard page</div>,
}));

jest.mock('pages/Character', () => ({
  Character: () => <div>Character page</div>,
}));
