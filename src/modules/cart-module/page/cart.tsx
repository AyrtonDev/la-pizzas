import { Loader } from '@/modules/menu-module/components/loader';
import { useCart } from '@/shared/contexts/cart/cart-context';

import { BodyTable } from '../components/table/body';
import { HeaderTable } from '../components/table/header';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="bg-detail-y text-primary mx-auto my-5 flex size-85 flex-col items-center gap-4 rounded-xl text-2xl font-semibold">
      {cart.length > 0 && (
        <>
          Seu carrinho
          <HeaderTable />
          <div>
            {cart.map((pizza) => (
              <BodyTable key={pizza.id}>
                <div>{pizza.name}</div>
              </BodyTable>
            ))}
          </div>
        </>
      )}
      {cart.length === 0 && <Loader />}
    </div>
  );
}
