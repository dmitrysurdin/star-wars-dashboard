import { RouteObject } from 'react-router';
import { CommonLayout } from '../../../components/layouts/CommonLayout';
import { Dashboard } from '../../../pages/Dashboard';
import { Character } from '../../../pages/Character';
import { AppRoutes } from '../../../const/AppRoutes';
import { NotFound } from '../../../pages/NoFound';

export const routes: Array<RouteObject> = [
  {
    element: <CommonLayout />,
    children: [
      {
        element: <Dashboard />,
        path: AppRoutes.Dashboard,
      },
      {
        element: <Character />,
        path: AppRoutes.Character,
      },
      {
        element: <NotFound />,
        path: AppRoutes.NotFound,
      },
    ],
  },
];
