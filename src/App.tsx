import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { CartProvider } from './shared/contexts/cart/cart-context';

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
