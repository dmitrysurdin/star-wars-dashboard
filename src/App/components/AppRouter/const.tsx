import { RouteObject } from 'react-router';
import { Dashboard } from 'pages/Dashboard';
import { CharacterDetails } from 'pages/CharacterDetails';
import { NotFound } from 'pages/NotFound';
import { AppRoute } from 'const/AppRoute';
import { CommonLayout } from '../layouts/CommonLayout';

export const routes: Array<RouteObject> = [
  {
    element: <CommonLayout />,
    children: [
      {
        element: <Dashboard />,
        path: AppRoute.Dashboard,
      },
      {
        element: <CharacterDetails />,
        path: AppRoute.People,
      },
      {
        element: <NotFound />,
        path: AppRoute.NotFound,
      },
    ],
  },
];
