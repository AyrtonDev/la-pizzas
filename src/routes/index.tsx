import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/modules/home-module/page/home';
import MenuPage from '@/modules/menu-module/page/menu';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cardapio',
    element: <MenuPage/>
  }
]);
