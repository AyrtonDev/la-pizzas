import type { PizzaModel } from '@/domain/models/pizza-model';
import { Button } from '@/shared/components/ui/button';

import { formatCurrency } from '../../helpers/format';

type Props = {
  pizza: PizzaModel;
};

export const CardProduct = ({ pizza }: Props) => {
  return (
    <div className="bg-light h-102 w-74 rounded-xl p-4">
      <div className="flex h-full w-full flex-col items-center justify-between">
        <div className="bg-detail-y/40 flex size-64 items-center justify-center overflow-hidden rounded-xl">
          <img
            src={`/images/pizzas/${pizza.image}`}
            alt={`pizza ${pizza.name}`}
            className="h-10/12 w-auto object-cover"
          />
        </div>

        <span className="text-primary text-center text-2xl font-bold">{pizza.name}</span>
        <div className="flex justify-center gap-5">
          <Button className="text-light text-xl font-bold">Ver Detalhes</Button>
          <span className="text-primary text-xl font-bold">{formatCurrency(pizza.price)}</span>
        </div>
        <Button className="text-light w-full text-xl font-bold">Adicionar ao Carrinho</Button>
      </div>
    </div>
  );
};
