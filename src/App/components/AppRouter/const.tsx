import { RouteObject } from 'react-router';
import { CommonLayout } from 'components/layouts/CommonLayout';
import { Dashboard } from 'pages/Dashboard';
import { Character } from 'pages/Character';
import { NotFound } from 'pages/NotFound';
import { AppRoute } from 'const/AppRoute';

export const routes: Array<RouteObject> = [
  {
    element: <CommonLayout />,
    children: [
      {
        element: <Dashboard />,
        path: AppRoute.Dashboard,
      },
      {
        element: <Character />,
        path: AppRoute.Character,
      },
      {
        element: <NotFound />,
        path: AppRoute.NotFound,
      },
    ],
  },
];
