export const ERROR_MESSAGE = 'Error message';

export const mockDashboardDataLoading = {
  data: {
    count: null,
    next: '',
    previous: '',
    results: [],
  },
  loading: true,
  error: null,
};

export const mockDashboardDataError = {
  data: {
    count: null,
    next: '',
    previous: '',
    results: [],
  },
  loading: false,
  error: ERROR_MESSAGE,
};

export const mockDashboardDataSuccess = {
  data: {
    count: 3,
    next: '',
    previous: '',
    results: [
      { id: '1', name: 'Character 1' },
      { id: '2', name: 'Character 2' },
      { id: '3', name: 'Character 3' },
    ],
  },
  loading: false,
  error: null,
};

export const mockPaginationData = {
  currentPage: 1,
  pagesCount: 3,
  onPageChange: jest.fn(),
};
