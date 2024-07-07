import { RouteObject, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { AppRoute } from 'const';
import { routes } from './const';
import './AppRouter.mocks';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  createBrowserRouter: jest.fn(),
}));

const renderRouterProvider = (initialEntry: AppRoute = AppRoute.Dashboard) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [initialEntry],
  });

  render(<RouterProvider router={router} />);
};

describe('AppRouter', () => {
  it('should have 3 routes with paths', () => {
    const countRoutesWithPaths = (routesArray: Array<RouteObject>): number => {
      let totalRoutesCount = 0;

      routesArray.forEach(({ path, children }) => {
        if (path) {
          totalRoutesCount += 1;
        }

        if (children) {
          totalRoutesCount += countRoutesWithPaths(children);
        }
      });

      return totalRoutesCount;
    };

    expect(countRoutesWithPaths(routes)).toBe(3);
  });

  it.each([
    [AppRoute.Dashboard, 'All Characters'],
    [AppRoute.People, 'Character Details'],
  ])('page %s should contain page content', async (route, pageContent) => {
    renderRouterProvider(route);

    await waitFor(() => {
      expect(screen.getByText(pageContent)).toBeVisible();
    });
  });
});
