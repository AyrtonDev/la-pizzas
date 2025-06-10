import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/modules/home-module/page/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
