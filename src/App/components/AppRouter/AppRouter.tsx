import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './const';

const router = createBrowserRouter(routes);

export const AppRouter: FC = () => <RouterProvider router={router} />;
