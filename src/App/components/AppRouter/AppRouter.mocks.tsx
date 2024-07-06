jest.mock('pages/Dashboard', () => ({
  Dashboard: () => <div>StarWars Dashboard</div>,
}));

jest.mock('pages/Character', () => ({
  Character: () => <div>Character page</div>,
}));
