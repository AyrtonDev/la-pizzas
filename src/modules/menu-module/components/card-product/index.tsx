import type { PizzaModel } from '@/domain/models/pizza-model';
import { Button } from '@/shared/components/ui/button';

import { formatCurrency } from '../../helpers/format';

type Props = {
  pizza: PizzaModel;
};

export const CardProduct = ({ pizza }: Props) => {
  return (
    <div className="bg-light flex rounded-xl">
      <div className="flex flex-col">
        <img
          src={`/images/pizzas/${pizza.image}`}
          alt={`pizza ${pizza.name}`}
          className="bg-detail-y/40 w-60 rounded-xl"
        />

        <span className="text-primary text-xl font-bold">{pizza.name}</span>
        <div className="flex justify-center gap-5">
          <Button className="text-light text-xl font-bold">Ver Detalhes</Button>
          <span className="text-primary text-xl font-bold">{formatCurrency(pizza.price)}</span>
        </div>
        <Button className="text-light text-xl font-bold">Adicionar ao Carrinho</Button>
      </div>
    </div>
  );
};
