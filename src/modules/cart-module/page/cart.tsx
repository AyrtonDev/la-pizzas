import { Loader } from '@/modules/menu-module/components/loader';
import { Button } from '@/shared/components/ui/button';
import { useCart } from '@/shared/contexts/cart/cart-context';

import { Total } from '../components/card-values';
import { Delivery } from '../components/container-delivery';
import { Payment } from '../components/container-payment';
import { Table } from '../components/table';
import { BodyTable } from '../components/table/body';
import { HeaderTable } from '../components/table/header';
import { RowTable } from '../components/table/row';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="text-light flex flex-col items-center rounded-xl px-1 py-4 text-2xl font-semibold">
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

          <section>
            <div className="text-primary pt-2">
              <h1 className="h-12">Formas de envio</h1>
              <Delivery />
            </div>
          </section>
          <section>
            <div className="text-primary pt-2">
              <h1 className="h-12">Formas de pagamento</h1>
              <Payment />
            </div>
          </section>
          <section>
            <div className="my-5 w-82">
              <Total />
            </div>
          </section>

          <Button className="h-15 text-2xl font-bold">Fechar pedido</Button>
        </>
      )}
      {cart.length === 0 && <Loader />}
    </div>
  );
}
