import { Loader } from '@/modules/menu-module/components/loader';
import { useCart } from '@/shared/contexts/cart/cart-context';

import { Delivery } from '../components/card-delivery';
import { Table } from '../components/table';
import { BodyTable } from '../components/table/body';
import { HeaderTable } from '../components/table/header';
import { RowTable } from '../components/table/row';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="bg-primary text-light mx-auto my-5 flex size-85 flex-col items-center gap-4 rounded-xl px-2 py-4 text-2xl font-semibold">
      <h2> Seu carrinho</h2>
      {cart.length > 0 && (
        <>
          <Table>
            <HeaderTable />
            <BodyTable>
              {cart.map((pizza) => (
                <RowTable cartItem={pizza} />
              ))}
            </BodyTable>
          </Table>

          <section className="h-full w-full">
            <div className="text-primary pt-2">
              <h1 className="h-12">Formas de envio</h1>
              <Delivery />
            </div>
          </section>
        </>
      )}
      {cart.length === 0 && <Loader />}
    </div>
  );
}
