import { useState, useCallback } from 'react';
import { DEFAULT_PAGE, ITEMS_PER_PAGE } from '../const';

interface UsePaginationParams {
  page?: number | null;
}

export const usePagination = ({ page }: UsePaginationParams = {}) => {
  const initialPage = page ?? DEFAULT_PAGE;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pagesCount = Math.ceil(initialPage / ITEMS_PER_PAGE);

  const handlePageChange = useCallback((newPage: number) => setCurrentPage(newPage), []);

  return { currentPage, pagesCount, onPageChange: handlePageChange };
};
