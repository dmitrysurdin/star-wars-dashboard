import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppRouter } from './components/AppRouter/AppRouter';

export const App: FC = () => (
  <>
    <AppRouter />
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      limit={5}
      draggable={false}
      closeOnClick={false}
      pauseOnHover={false}
      icon={false}
      closeButton
    />
  </>
);
