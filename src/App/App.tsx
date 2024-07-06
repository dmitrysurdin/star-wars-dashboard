import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppRouter } from './components/AppRouter/AppRouter';

export const App: FC = () => (
  <>
    <AppRouter />
    <ToastContainer position="bottom-left" closeOnClick pauseOnHover />
  </>
);
