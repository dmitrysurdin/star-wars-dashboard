import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { SEARCH_DEBOUNCE_TIMER } from 'const';
import { Dashboard } from './Dashboard';
import { useDashboard } from './hooks/useDashboard';
import { usePagination } from './hooks/usePagination';
import {
  mockDashboardDataLoading,
  mockDashboardDataError,
  mockDashboardDataSuccess,
  mockPaginationData,
  ERROR_MESSAGE,
} from './Dashboard.mocks';

jest.mock('./hooks/useDashboard');
jest.mock('./hooks/usePagination');

const useDashboardMock = useDashboard as jest.MockedFunction<typeof useDashboard>;
const usePaginationMock = usePagination as jest.MockedFunction<typeof usePagination>;

describe('Dashboard', () => {
  beforeEach(() => {
    usePaginationMock.mockReturnValue(mockPaginationData);
  });

  it('renders loading state', () => {
    useDashboardMock.mockReturnValue(mockDashboardDataLoading);

    render(<Dashboard />, { wrapper: Router });

    expect(screen.getByText('...Loading')).toBeVisible();
  });

  it('renders error state', () => {
    useDashboardMock.mockReturnValue(mockDashboardDataError);
    usePaginationMock.mockReturnValue(mockPaginationData);

    render(<Dashboard />, { wrapper: Router });

    expect(screen.getByText(ERROR_MESSAGE)).toBeVisible();
  });

  it('renders data correctly', () => {
    useDashboardMock.mockReturnValue(mockDashboardDataSuccess);

    render(<Dashboard />, { wrapper: Router });

    expect(screen.getByText('All Characters')).toBeVisible();
    expect(screen.getByText('Character 1')).toBeVisible();
    expect(screen.getByText('Character 2')).toBeVisible();
    expect(screen.getByText('Character 3')).toBeVisible();
  });

  it('handles page change and updates URL', async () => {
    useDashboardMock.mockReturnValue(mockDashboardDataSuccess);

    render(<Dashboard />, { wrapper: Router });

    const pagination = screen.getByText('2');

    userEvent.click(pagination);

    await waitFor(() => {
      expect(mockPaginationData.onPageChange).toHaveBeenCalledWith(2);
      expect(window.location.search).toContain('page=2');
    });
  });

  it('should execute search query with debounce and updates data correctly', async () => {
    jest.useFakeTimers();

    useDashboardMock.mockReturnValue(mockDashboardDataSuccess);

    render(<Dashboard />, { wrapper: Router });

    const searchInput = screen.getByLabelText(/Search/i);

    fireEvent.change(searchInput, { target: { value: 'Lu' } });
    jest.advanceTimersByTime(SEARCH_DEBOUNCE_TIMER);
    await waitFor(() => {
      expect(useDashboardMock).toHaveBeenCalled();
    });

    jest.useRealTimers();
  });
});
