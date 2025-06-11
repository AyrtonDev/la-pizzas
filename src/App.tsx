import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import Header from './shared/components/header';
import { CartProvider } from './shared/contexts/cart/cart-context';

function App() {
  return (
    <CartProvider>
      <Header />
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
