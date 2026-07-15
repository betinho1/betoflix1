import { createBrowserRouter } from 'react-router-dom';

import { NotFound } from './pages/404';
import { AppLayout } from './pages/_layouts/app';
import { Checkout } from './pages/app/checkout';
import { Success } from './pages/app/success';
import { Cancel } from './pages/app/cancel';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Checkout />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '/cancel',
        element: <Cancel />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
