import { createBrowserRouter } from 'react-router-dom';

import CartPage from '@/modules/cart-module/page/cart';
import HomePage from '@/modules/home-module/page/home';
import MenuPage from '@/modules/menu-module/page/menu';
import { ResponsiveLayout } from '@/shared/layout/responsive-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'cardapio',
        element: <MenuPage />,
      },
      {
        path: 'carrinho',
        element: <CartPage />,
      },
    ],
  },
]);
