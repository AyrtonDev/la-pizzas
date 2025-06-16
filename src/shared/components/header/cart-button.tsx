import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useCart } from '@/shared/contexts/cart/cart-context';

import { Button } from '../ui/button';

export const CartButton = () => {
  const { cart } = useCart();

  return (
    <Link to="/carrinho">
      <Button
        size="icon"
        className="bg-detail-y hover:bg-light hover:text-primary relative size-10 cursor-pointer"
      >
        <ShoppingCart />
        {cart.length > 0 && (
          <div className="bg-primary absolute bottom-6 left-6 rounded-full px-2 py-1 font-bold text-white">
            {cart.length}
          </div>
        )}
      </Button>
    </Link>
  );
};
